import * as types from './actionTypes';

const initialState = { cont: false };

const splashReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONT:
      return Object.assign({}, state, { cont: true });
    default:
      return state;
  }
};

export default splashReducer;
