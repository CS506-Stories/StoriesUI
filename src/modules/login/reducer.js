import { LOGIN, SIGNUP, LOGOUT, } from './actionTypes';

const initialState = {
  reduxExample: 'Not Pressed Yet!',
  handle: '',
  isloggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
   case LOGIN:
   //TODO dbcall
     return {
       ...state,
       isLoggedIn: true,
       handle: action.handle,
     };
   case LOGOUT:
   //TODO dbcall
     return {
       ...state, isLoggedIn: false
     };
   case SIGNUP:
    //TODO dbcall

     return {
       ...state,
       isLoggedIn: true,
       handle: action.handle,
     };
    default:
      return state;
  }
};

export default loginReducer;
