
/**
* @function getUser retreives the current user from localStorage.
* @return {Object || null } the user if present, or null.
*/
export const getUser = () => {
  return localStorage.getItem('video-chat-user')
    ? JSON.parse(localStorage.getItem('video-chat-user'))
    : null;
}
/**
* @function setUserInfo stores the user in localStorage.
* @param { Object } userInfo the user details to be stored locally. The user informations
* are accessible from the API backend protected route '/api/users/info'.
* @throws USER_STORAGE Error if the userInfo to be parsed and stored is not of Object type.
*/
export const setUserInfo = (userInfo) => {
  if(typeof userInfo !== 'object')
    throw new Error('USER_STORAGE : The user info must be of type Object');
  // retreives the user in local storage.
  let user = getUser();
  // if already existent set user info to userInfo
  if(user !== null) {
    user['info'] = userInfo;
  // else create a user with info field set to userinfo provided.
  } else {
    user = Object.assign({info: userInfo}, {})
  }
  const userStr = JSON.stringify(user);
  localStorage.setItem('video-chat-user', userStr);
}
/**
* @function getToken retreives the token stored locally inside the current user
* Object.
* @return { String || null } the user's token if user and token exist, or null.
*/
export const getToken = () => {
  const user = getUser();
  return user !== null && user.token
    ? user.token
    : null
}
/**
* @function setUserToken sets a token to the currently existing
* user stored in local storage.
* @param { String } token the token received from backend to authenticate
* the user inside the video-chat API.
* @throws USER_STORAGE Error if no token is provided, or the token note
* compliant with JWT standard.
* //@return { Boolean } true if the token has been set properly. NOT!!
*/
export const setUserToken = (token) => {
  // only proceeds if parameter is provided && parameter provided matches the JWT format.
  if(token && /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(token)) {
    // retreives the user locally.
    let user = getUser();
    // if user exists, set the token property.
    if(user) {
      user['token'] = token;
    // else assign the token property to an empty object.
    } else {
      user = Object.assign({token}, {})
    }
    // store the user locally.
    const userStr = JSON.stringify(user);
    localStorage.setItem('video-chat-user', userStr);
  } else {
    throw new Error('USER_STORAGE : a valid token must be provided.')
  }
  // return true;
}
/**
* @function removeUser removes the user from localStorage.
*
*/
export const removeUser = () => {
  localStorage.removeItem('video-chat-user');
}
