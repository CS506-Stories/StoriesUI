// This is where the reducers are written for the specific module


import UPDATE from './actionTypes';

const initialState = { reduxExample: 'Not Pressed Yet!' };

// This receives an action from the "action.js" file after something is selected
// in the view.

const splashReducer = (state = initialState, action) => {
  switch (action.type) {
    // In this example, we are just creating a new state. Normally you are adding on
    // to the already existing state. Like Old state + change.
    case UPDATE:
      return { reduxExample: action.payload.str };
    default:
      return state;
  }
};

export default splashReducer;
