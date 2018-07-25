import { config } from '../config';
import { chatActions } from '../actions';

import {
  getUser,
} from '../helpers';

import {
  protocol as p
} from '../constants';

export const chatService = {
  connect
};

const WSS_ENDPOINT = config.WSS_ENDPOINT;


function connect(dispatch) {
  const user = getUser();
  const userToken = user.token;
   if(!userToken) {
     return;
   }
   let socket = new WebSocket(`${WSS_ENDPOINT}?access_token=${userToken}`);

   socket.onopen = () => {
     // socket.send(JSON.stringify({
     //   type: 'MESSAGE_USER_JOINS',
     //   name: user.info.name
     // }));
   };

   socket.onmessage = (event) => {
     const data = JSON.parse(event.data);
     const type = data.type;
     const payload = data.data;

     switch(type) {
      case p.MESSAGE_USER_JOINS :
        dispatch(chatActions.addUser(payload));
        break;
      case p.MESSAGE_USER_LIST :
        dispatch(chatActions.listUsers(payload));
        break;
      case p.MESSAGE_WHO_ARE_YOU :
        dispatch(chatActions.welcomeUser());
        break;
      case p.MESSAGE_SERVER_MESSAGE :
        dispatch(chatActions.processServerMessage(payload));
        break;
      case p.MESSAGE_CHAT :
        dispatch(chatActions.processServerMessage(payload));
        break;
      default:
        break;
     }
   };



   return socket;
}

// async function connect() {
//   const userToken = getToken();
//   if(!userToken) {
//     return;
//   }
//   let bareSocket = await new CustomWebSocket(`${WSS_ENDPOINT}?access_token=${userToken}`);
//   // configure chat websocket.
//   let chatSocket = await configureSocket(bareSocket, cpa);
//
//
//
//   return chatSocket;
// }

// const handleMessage = (type, data) => {
//   switch (type) {
//     case p.MESSAGE_USER_JOINS: {
//       console.log(`user ${data.name} joined!`);
//       break;
//     }
//     case p.MESSAGE_USER_LIST: {
//       console.log(`user ${data.map(user => user.nickname)} ${data.length === 1 ? 'is' : 'are'} in the room!`);
//       break;
//     }
//     case p.MESSAGE_WHO_ARE_YOU: {
//       console.log('user offered identification!');
//       break;
//     }
//     default: {
//       console.log('unknwown type: ', type);
//     }
//   }
// };

// const configureSocket = (customWebSocket, protocolActions) => {
//   protocolActions.map(pa =>
//     pa.callback.map(ac =>
//       customWebSocket.bind(pa.action, ac)
//     )
//   );
//   return customWebSocket;
// };
