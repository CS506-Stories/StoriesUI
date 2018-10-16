import UPDATE from './actionTypes';

const initialState = {
  reduxExample: 'Not Pressed Yet!' 
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    // In this example, we are just creating a new state. Normally you are adding on
    // to the already existing state. Like Old state + change.
    case UPDATE:
      return { reduxExample: action.payload.str };
    default:
      return state;
  }
};

export default loginReducer;
