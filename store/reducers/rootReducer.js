import { combineReducers } from 'redux';

// reducers
import { authReducer } from '../actions/auth';

export default combineReducers({
  auth: authReducer,
});
