import {
  backend,
  removeUser,
  setUserInfo,
  getUser,
  getToken,
  setUserToken,
  history
} from '../helpers';


export const userService = {
  startLoginFlow,
  logout,
  getSelf
};

export const API_AUTH_ADDRESS = 'http://localhost:5000/auth';

function startLoginFlow(socialMediaProvider) {
    if (socialMediaProvider !== 'facebook' && socialMediaProvider !== 'google') {
      console.log(`${socialMediaProvider} : unknown provider for authentication`)
      return;
    }
    window.location.replace(`${API_AUTH_ADDRESS}/${socialMediaProvider}`);
}

/**
* @function getSelf accesses API endpoint to get informations about the
* currently logged user. No parameter is provided because the informations are
* inferred by the backend from the Bearer token contained in the authorization
* headers (@see backend implementation).
*/
async function getSelf() {
  // if no token is stored or not in the url as a query param, return directly.
  if(!getToken()) {
    const token = getParameterByName('access_token');
    if(!token) {
      return;
    }
    setUserToken(token);
  }
  let user;
  try{
    // returns the current user.
    const response = await backend.get('/api/users/info');
    let userInfo = handleResponse(response).user;
    // sets user info in local storage.
    setUserInfo(userInfo);
  } catch (error) {
    console.log('cannot get user info.', error);
  }
  user = getUser();
  history.push('/');
  return user;
}

function logout() {
  removeUser();
}

function handleResponse(response) {
  let data = response.data;
  if (!data) {
    if(response.status === 403) {
      // auto-logout if user is not authorized.
      logout();
      window.location.reload(true);
    }
  }
  if(data.status !== "data") {
    const error = (response && response.error) || response.statusText;
    return Promise.reject(error);
  }

  return data;
  // };
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
