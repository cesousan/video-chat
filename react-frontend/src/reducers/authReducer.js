import {
  FETCH_USER_INFO,
  FETCH_AUTH_TOKEN
} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER_INFO:
      return action.payload || false;
    case FETCH_AUTH_TOKEN:
      return action.payload || false;
    default:
      return state;
  }
}
