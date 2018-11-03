import { combineReducers } from 'redux';
import authUser from './authedUser';
import tweets from './tweets';
import users from './users';

export default combineReducers({
  authUser,
  tweets,
  users
});
