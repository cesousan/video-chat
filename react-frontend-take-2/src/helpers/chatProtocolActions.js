import { protocol as p } from '../constants';


let whoAreYou = () => {console.log('user offered identification!');};

let userList = (users) => {console.log(`user ${users.map(user => user.nickname)} ${users.length === 1 ? 'is' : 'are'} in the room!`);};

let userJoins = (user) => {console.log(`user ${user.name} joined!`);};

export const chatProtocolActions = [
  // { action: p.MESSAGE_HELLO, callback: [hello] },
  { action: p.MESSAGE_WHO_ARE_YOU, callback: [whoAreYou] },
  // { action: p.MESSAGE_CHECK_NICKNAME, callback: [checkNickname] },
  // { action: p.MESSAGE_REQUEST_NICKNAME, callback: [requestNickname] },
  // { action: p.MESSAGE_NAME_TOO_SHORT, callback: [nameTooShort] },
  // { action: p.MESSAGE_NAME_TOO_LONG, callback: [nameTooLong] },
  // { action: p.MESSAGE_NAME_BAD_CHARACTERS, callback: [nameBadChar] },
  // { action: p.MESSAGE_NICKNAME_VALID, callback: [nicknameValid] },
  // { action: p.MESSAGE_NICKNAME_GRANTED, callback: [nicknameGranted] },
  { action: p.MESSAGE_USER_LIST, callback: [userList] },
  { action: p.MESSAGE_USER_JOINS, callback: [userJoins] },
  // { action: p.MESSAGE_USER_LEAVES, callback: [userLeaves] },
  // { action: p.MESSAGE_USER_STATE_CHANGE, callback: [userStateChange] },
  // { action: p.MESSAGE_CHAT, callback: [messageChat] },
  // { action: p.MESSAGE_SERVER_MESSAGE, callback: [serverMessage] }
];
