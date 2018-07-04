import API from '../services/backend-service';
import Auth from '../modules/Auth';
import { FETCH_USER_INFO } from './types';

// export const handleToken = token => async dispatch => {
//   const res = await axios.post('/api/stripe', token);
//
//   dispatch({ type: FETCH_USER_INFO, payload: res.data });
// };

// export const handleToken = (props) => async dispatch => {
//
//   // dispatch({ type: FETCH_AUTH_TOKEN, payload: res.data });
// }

export const fetchUser = (search) => async dispatch => {
  const token = search
    ? new URLSearchParams(search).get('access_token')
    : null;
  console.log('in fetch user --> ', search);
  if(token) {
      Auth.authenticateUser(token);
      try {
        const res = await API.get('api/users/info');
        dispatch({ type: FETCH_USER_INFO, payload: res ? res.data : false });
      } catch(e) {
        console.log(`error trying to fetch user info... error returned is ${e}`);
      }
  }

};
