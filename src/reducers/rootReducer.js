// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authReducer.jsx';
import contentReducer from './contentReducer.jsx';

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  content: contentReducer
});

export default rootReducer;
