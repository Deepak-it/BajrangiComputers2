// websiteContentReducer.js

import { SAVE_SLIDES_RESPONSE, SAVE_TESTIMONIAL_RESPONSE } from "../actions/types";
const initialState = {
  testimonials: [],
  slides: []
};

// Define the reducer function
const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SLIDES_RESPONSE:
      debugger
      console.log(action.payload)
      return {
        ...state,
        slides: action.payload
      };
    case SAVE_TESTIMONIAL_RESPONSE:
      return {
        ...state,
        testimonials: action.payload
      };
    default:
      return state;
  }
};

export default contentReducer;
