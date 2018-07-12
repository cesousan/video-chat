import { userConstants } from '../constants';
import { userService } from '../services';

export const userActions = {
  login,
  identifySelf,
  logout
};

function login(socialMedia) {
  let requestLogin = (socialMedia) => {
    return { type: userConstants.LOGIN_REQUEST, provider: socialMedia };
  };
  let requestLogout = () => {
    return { type: userConstants.LOGOUT };
  };
  let failureLogin = (error) => {
    console.log(`an error happened while login attempt : ${error}`);
    return { type: userConstants.LOGIN_FAILURE };
  };

  return async dispatch => {
    dispatch(requestLogout());
    await userService.logout();
    // starting auth process
    dispatch(requestLogin({ provider: socialMedia }));
    try {
      // redirecting to the api to launch oauth2 flow
      userService.startLoginFlow(socialMedia);
    } catch (error) {
      // something wrong happened.
      dispatch(failureLogin(error));
      // dispactch error message action here.
    }
  }
}

function identifySelf() {
  let requestUserInfo = () => {
    return { type: userConstants.GET_SELF_REQUEST };
  };
  let successUserInfo = (user) => {
    return { type: userConstants.GET_SELF_SUCCESS, user };
  };
  let failureUserInfo = (error) => {
    console.log(`an error occured while self authenticating of the user : ${error}`);
    userService.logout();
    return { type: userConstants.GET_SELF_FAILURE };
  };
  return async dispatch => {
    // function is run at startup to check if the user is known from the api
    // a.k.a is authenticated with a valid token.
    dispatch(requestUserInfo());
    let user;
    try {
      user = await userService.getSelf();
      dispatch(successUserInfo(user));
    } catch(error) {
      dispatch(failureUserInfo(error));
    }
  }
}

function logout() {
  let requestLogout = () => {
    return { type: userConstants.LOGOUT };
  };
  return async dispatch => {
    dispatch(requestLogout());
    userService.logout();
  }
}
