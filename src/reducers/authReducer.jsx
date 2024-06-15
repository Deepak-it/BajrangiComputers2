// authReducer.js

import { SAVE_LOGIN_RESONSE, SAVE_LOGIN_RESPONSE } from "../actions/types";
const initialState = {
  loginResponse: {
    isAdmin: false,
    isLoggedIn: false
  }
};

// Define the reducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_LOGIN_RESPONSE:
      return {
        ...state,
        loginResponse: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
