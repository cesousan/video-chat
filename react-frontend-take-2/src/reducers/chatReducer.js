import { chatConstants } from '../constants';
export const chat = (state = {}, action) => {
  switch (action.type) {
    case chatConstants.ADD_USER_SUCCESS:
      console.log(`USER SUCCESSFULLY ADDED : ${action.user}`);
      return {
        user : action.user
      };
    case chatConstants.ADD_USER_FAILURE :
      console.log('USER COULD NOT BE ADDED');
      return {};
    case chatConstants.MESSAGE_USER_LIST_SUCCESS :
      console.log(`USERS SUCCESSFULLY FETCHED : ${action.users}`);
      return {
        users: action.users
      };
    case chatConstants.MESSAGE_USER_LIST_FAILURE :
      console.log('USERS COULD NOT BE FETCHED');
      return {
        state
      };
    case chatConstants.MESSAGE_WHO_ARE_YOU :
      console.log('USER OFFERED AUTHENTICATION');
      return {
      };
    case chatConstants.RECEIVE_MESSAGE :
      console.log('A MESSAGE IS BEEING RECEIVED FROM SERVER');
      return {
        ...state,
        receivingMsg: true,
        msg: action.message
      };
    case chatConstants.RECEIVE_MESSAGE_SUCCESS :
      console.log('A VALID MESSAGE HAS BEEN RECEIVED FROM SERVER');
      return {
        msg: action.message,
        chats: {
          ...state.chats,

        }
      };
    case chatConstants.RECEIVE_MESSAGE_FAILURE :
      console.log('THE MESSAGE FROM SERVER WAS INVALID AND HAS BEEN IGNORED');
      return {
        msgErrors: action.errors
      };
    case chatConstants.SEND_MESSAGE :
      console.log('A MESSAGE IS ABOUT TO BE SENT');
      return {
        sendingMsg: true,
        // msg: action.message
      };
    case chatConstants.SEND_MESSAGE_SUCCESS :
      console.log('A MESSAGE HAS BEEN SENT');
      return {
        text: ''
      };
    case chatConstants.SEND_MESSAGE_FAILURE :
      console.log('THE MESSAGE COULD NOT BE SENT');
      return {
        msg: action.errors
      };
    case chatConstants.TYPING_IDDLE :
      console.log('USER IDDLE');
      return {
        isTyping: false
      };
    case chatConstants.TYPING_ACTIVE :
      console.log('USER IS TYPING');
      return {
        isTyping: true,
        msg: action.message
      }
    default:
      return state;
  }
}
