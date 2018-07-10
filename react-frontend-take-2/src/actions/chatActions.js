import { chatConstants } from '../constants';
import { chatService } from '../services';

export const chatActions = {
  joinRoom,
  // leaveRoom,
  // sendMessage,
  // changeNickname
}

function joinRoom() {
  let requestConnection = () => {
    return { type: chatConstants.CONNECTION_REQUEST };
  };
  let succesConnection = () => {
    return { type: chatConstants.CONNECTION_SUCCESS };
  };
  let failureConnection = () => {
    return { type: chatConstants.CONNECTION_FAILURE };
  }

  return async dispatch => {
    dispatch(requestConnection());
    await chatService.connect();

  }
}
