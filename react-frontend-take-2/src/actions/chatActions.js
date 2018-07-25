import { chatConstants, protocol as p } from '../constants';
import { chatService } from '../services';



export const chatActions = {
  connect,
  addUser,
  listUsers,
  welcomeUser,
  processServerMessage,
  sendMessage,
  typeMessage
  // leaveRoom,
  // sendMessage,
  // changeNickname
}

function connect() {
  let requestConnection = () => {
    return { type: chatConstants.CONNECTION_REQUEST };
  };
  let succesConnection = (socket) => {
    return { type: chatConstants.CONNECTION_SUCCESS, socket };
  };
  let failureConnection = () => {
    return { type: chatConstants.CONNECTION_FAILURE };
  }
  return async (dispatch) => {
    dispatch(requestConnection());
    const socket = await chatService.connect(dispatch);
    setTimeout(() => {
      if (socket.readyState !== WebSocket.OPEN) {
        dispatch(failureConnection());
      } else {
        dispatch(succesConnection(socket));
      }
    }, 100);
  }
};

function addUser(user) {
  let adduserSuccess = (user) => {
    return { type: chatConstants.ADD_USER_SUCCESS, user};
  };
  let adduserFailure = () => {
    return { type: chatConstants.ADD_USER_FAILURE };
  };
  return async dispatch => {
    if(user) {
      dispatch(adduserSuccess(user));
    } else {
      dispatch(adduserFailure());
    }
  }
};

function listUsers(users) {
  let listUsersSuccess = (users) => {
    return { type: chatConstants.MESSAGE_USER_LIST_SUCCESS, users };
  };
  let listUsersFailure = () => {
    return { type: chatConstants.MESSAGE_USER_LIST_FAILURE };
  };
  return async dispatch => {
    if(users.length) {
      dispatch(listUsersSuccess(users));
    } else {
      dispatch(listUsersFailure());
    }
  }
};

function welcomeUser() {
  return async dispatch => {
    return { type: chatConstants.MESSAGE_WHO_ARE_YOU };
  }
};

function processServerMessage(message) {
  let processIncomingServerMessage = (message) => {
    return { type: chatConstants.RECEIVE_MESSAGE, message };
  };
  let processServerMessageSuccess = (message) => {
    return { type: chatConstants.RECEIVE_MESSAGE_SUCCESS, message };
  };
  let processServerMessageFailure = (errors) => {
    return { type: chatConstants.RECEIVE_MESSAGE_FAILURE, errors };
  };

  return async dispatch => {
    dispatch(processIncomingServerMessage(message));
    let res = _controlMessage(message);
    if(res.OK) {
      dispatch(processServerMessageSuccess(message));
    } else {
      dispatch(processServerMessageFailure(res.errors));
    }
  }
};

function sendMessage(message, socket) {
  let processLeavingMessage = (message) => {
    return { type: chatConstants.SEND_MESSAGE, message };
  };
  let sendMessageSuccess = (message) => {
    return { type: chatConstants.SEND_MESSAGE_SUCCESS, message };
  }
  let sendMessageFailure = (errors) => {
    return { type: chatConstants.SEND_MESSAGE_FAILURE, errors };
  }

  return async dispatch => {
    dispatch(processLeavingMessage(message));
    let json = _wrapMessage(message);
    let res = _controlMessage(json, false);
    if(res.OK) {
      await socket.send(JSON.stringify(json));
      dispatch(sendMessageSuccess(json));
    } else {
      dispatch(sendMessageFailure(res.errors));
    }
  }
};


function typeMessage(txt) {
  return async dispatch => {
    if(!txt) {
      dispatch({ type: chatConstants.TYPING_IDDLE })
    } else {
      dispatch({ type: chatConstants.TYPING_ACTIVE, message: txt})
    }
  }
};

function _wrapMessage(txtMsg) {
  return {
    type: p.MESSAGE_CHAT,
    data: {
      message: txtMsg
    }
  }
};

function _controlMessage(msg, fromServer = true) {
  let res = {
    OK: false,
    errors: []
  };
  if(!('message' in msg || typeof msg.message !== 'string')) {
    res.errors.push({err: 'EMPTY_MESSAGE', msg: 'The message was empty'});
  }
  if(fromServer) {
    if(!('timestamp' in msg || typeof msg.timestamp !== 'number')) {
      res.errors.push({err: 'NO_VALID_TIMESTAMP', msg: 'There was no valid timestamp associated with the message'});
    }
    if (!('from' in msg || typeof msg.from !== 'string')) {
      res.errors.push({err: 'UNKNOWN_AUTHOR', msg: 'The message was sent from an unknown user'});
    }
    if(!('id' in msg || typeof msg.id !== 'string')) {
      res.errors.push({err: 'NO_VALID_ID', msg: 'The message has no valid identifier associated with it'});
    }
  }
  if(!res.errors.length) {
    res.OK = true;
  }
  return res;
};
