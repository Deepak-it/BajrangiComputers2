// actions.js

import * as TYPES from './types';

export const saveLoginResponse = (response) => ({
    type: TYPES.SAVE_LOGIN_RESPONSE,
    payload: response
});


export const contactResponse = (response) => ({
    type: TYPES.CONTACT_US_RESPONSE,
    payload: response
});
