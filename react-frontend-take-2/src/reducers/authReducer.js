import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('video-chat-user'));

const initialState = user ? { loggedIn: true, user } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        provider: action.provider
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        user: action.user
      }
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
        user: null
      };
    case userConstants.GET_SELF_REQUEST:
      return {
        loggingIn: true
      };
    case userConstants.GET_SELF_SUCCESS:
      return {
        loading: false,
        user: action.user
      };
    case userConstants.GET_SELF_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.error
      };
    default:
      return state
  }
}
