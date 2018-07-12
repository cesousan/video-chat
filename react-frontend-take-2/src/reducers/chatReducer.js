import { chatConstants } from '../constants';

export const chat = (state = {}, action) => {
  switch (action.type) {
    case chatConstants.CONNECTION_REQUEST:
      console.log('CONNECTION REQUEST MADE.');
      return {
        connecting: true
      };
    case chatConstants.CONNECTION_SUCCESS:
      console.log('CONNECTION ESTABLISHED.');
      return {
        socket: action.socket
      };
    case chatConstants.CONNECTION_FAILURE:
      console.log('FAILED TO ESTABLISH CONNEXION.');
      return {};
    default:
      return state;
  }
}
