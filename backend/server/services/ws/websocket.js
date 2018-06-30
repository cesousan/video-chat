const p = require('./protocol');
const uuidv4 = require('uuid/v4');

let users = [];

function sendPacket(ws, type, data) {
  let output;

  try {
    output = JSON.stringify({
      type,
      data
    })
  } catch(err) {
    console.log(`Failed to encode packet ${err.message}`);
  }

  try {
    ws.send(output);
  } catch(err) {
    console.log(`Failed to send packet ${err.message}`);
  }
}

function selectiveBroadcast (fn, type, message) {
  users.filter(u => fn(u)).map(user => sendPacket(user.client, type, message));
}

function getUserBySocket(ws) {
  return users.filter(u => u.client === ws).reduce(v => v);
}

function removeSocket(ws) {
  let index = users.indexOf(getUserBySocket(ws));
  if(index > -1) {
    users.splice(index, 1);
  }
  console.log(`removed socket for user at index ${index}`);
}

function broadcast(type, data) {
  selectiveBroadcast(() => true, type, data)
}

function sendUserList(ws) {
  let output = users.map(u => {
    return {
          id:       u.id,
          nickname: u.nickname
      }
    });
  sendPacket(ws, p.MESSAGE_USER_LIST, output)
}

module.exports =  (ws, request) =>  {

  const user = request.verified;
  console.log(`${user.name} is trying to connect.`);
  if(!user) return;

  let me = {
    id: user.id,
    client: ws,
    nickname: user.name || null,
    joinedAt: new Date().getTime()
  }
  users.push(me);

  broadcast(p.MESSAGE_USER_JOINS,
    {
      id: me.id,
      name: user.name,
      nickname: me.nickname,
      joinedAt: me.joinedAt
    });

  sendUserList(ws);

  ws.send(JSON.stringify({
    type: p.MESSAGE_WHO_ARE_YOU,
    data: null
  }));

  ws.on('close', () => {
    removeSocket(ws)
    broadcast(p.MESSAGE_USER_LEAVES,
      {
        id: me.id
      });
    return;
  })

  ws.on('message', (message) => {
    console.log(`received : ${message}`);
    let decoded = JSON.parse(message);

    if (decoded.type === p.MESSAGE_CHAT) {
      if(!(decoded.data.message.length && me.nickname)) return;

      broadcast(p.MESSAGE_CHAT, {
        message: decoded.data.message,
        timestamp: new Date().getTime(),
        from: me.nickname,
        id: uuidv4()
      })
      return;
    }

    if(decoded.type === p.MESSAGE_CHECK_NICKNAME) {

      if(decoded.data.nickname.length < 3) {
        ws.send(JSON.stringify({
          type: p.MESSAGE_NAME_TOO_SHORT,
          data: null
        }));
        return;
      }

      if(decoded.data.nickname.length > 14) {
        ws.send(JSON.stringify({
          type: p.MESSAGE_NAME_TOO_LONG,
          data: null
        }));

        return;
      }

      if(users.filter(u => u.nickname == decoded.data.nickname).length) {
        ws.send(JSON.stringify({
          type: p.MESSAGE_NAME_IN_USE,
          data: null
        }));

      return;
    }

    ws.send(JSON.stringify({
      type: p.MESSAGE_NICKNAME_VALID,
      data: null
    }));
    return;
  }

  if(decoded.type === p.MESSAGE_REQUEST_NICKNAME) {
    if(decoded.data.nickname.length < 3) {
      return;
    }
    if(decoded.data.nickname.length > 14) {
      return;
    }
    console.log(users.filter(u => u.nickname == decoded.data.nickname).length
      ? 'nickname already used'
      : 'nickname not used yet'
    );
    if(users.filter(u => u.nickname == decoded.data.nickname).length) {
      return;
    }

    ws.send(JSON.stringify({
      type: p.MESSAGE_NICKNAME_GRANTED,
      data: {nickname: decoded.data.nickname}
    }));

    getUserBySocket(ws).nickname = decoded.data.nickname;

    broadcast(
      p.MESSAGE_USER_STATE_CHANGE,
      {
        id: me.id,
        nickname: decoded.data.nickname
      });

    broadcast(
      p.MESSAGE_SERVER_MESSAGE,
      {
        message: `${decoded.data.nickname} has joined the room.`
      });
    }
  });
}
