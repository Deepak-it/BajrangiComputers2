// store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // if you want to use async actions
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk)); // Applying middleware if needed

export default store;
