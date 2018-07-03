import axios from 'axios';
import { FETCH_USER_INFO, FETCH_AUTH_TOKEN } from './types';

// export const handleToken = token => async dispatch => {
//   const res = await axios.post('/api/stripe', token);
//
//   dispatch({ type: FETCH_USER_INFO, payload: res.data });
// };


export const socialLogin = (socialMedia = 'facebook' | 'google') => async dispatch => {
  const res = await axios.get(`/auth/${socialMedia}`);
  dispatch({ type: FETCH_AUTH_TOKEN, payload: res.data });
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/users/info');
  dispatch({ type: FETCH_USER_INFO, payload: res.data });
};
