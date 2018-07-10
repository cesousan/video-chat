import { config } from '../config';
import {
  getToken
} from '../helpers';
export const chatService = {
  connect
};

const WSS_ENDPOINT = config.WSS_ENDPOINT;

function connect() {
  const userToken = getToken();
  if(!userToken) {
    return;
  }
  let socket = new WebSocket(`${WSS_ENDPOINT}?access_token=${userToken}`);

  socket.onmessage = function(event) {
    const json = JSON.parse(event.data);
    const data = json.data;

    const type = json.type;

    handleMessage(type, data);

  };
}

const handleMessage = (type, data) => {
  switch (type) {
    case 'MESSAGE_USER_JOINS': {
      console.log(`user ${data.name} joined!`);
      break;
    }
    case 'MESSAGE_USER_LIST': {
      console.log(`user ${data.map(user => user.nickname)} ${data.length === 1 ? 'is' : 'are'} in the room!`);
      break;
    }
    case 'MESSAGE_WHO_ARE_YOU': {
      console.log('user offered identification!');
      break;
    }
    default: {
      console.log('unknwown type: ', type);      
    }
  }
};
