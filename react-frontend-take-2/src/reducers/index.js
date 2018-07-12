import { combineReducers } from 'redux';

import { authentication } from './authReducer';
import { users } from './usersReducer';
import { chat } from './chatReducer';

const rootReducer = combineReducers({
  authentication,
  users,
  chat
});

export default rootReducer;
