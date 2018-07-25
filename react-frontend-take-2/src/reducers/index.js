import { combineReducers } from 'redux';

import { authentication } from './authReducer';
import { users } from './usersReducer';
import { chat } from './chatReducer';
import { connexion } from './websocketReducer';

const rootReducer = combineReducers({
  authentication,
  users,
  chat,
  connexion
});

export default rootReducer;
