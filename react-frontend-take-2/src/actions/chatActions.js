import { chatConstants } from '../constants';
import { chatService } from '../services';

export const chatActions = {
  connect,
  addUser,
  listUsers,
  // leaveRoom,
  // sendMessage,
  // changeNickname
}

function connect() {
  let requestConnection = () => {
    return { type: chatConstants.CONNECTION_REQUEST };
  };
  let succesConnection = () => {
    return { type: chatConstants.CONNECTION_SUCCESS };
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
        dispatch(succesConnection());
      }
    }, 100);
  }
}

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
}

function listUsers(users) {
  let listUsersSuccess = (users) => {
    return { type: chatConstants.MESSAGE_USER_LIST_SUCCESS, users }
  };
  let listUsersFailure = () => {
    return { type: chatConstants.MESSAGE_USER_LIST_FAILURE }
  };
  return async dispatch => {
    if(users.length) {
      dispatch(listUsersSuccess(users));
    } else {
      dispatch(listUsersFailure());
    }
  }
}
