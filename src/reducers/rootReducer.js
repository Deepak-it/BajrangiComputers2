// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authReducer.jsx';

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
