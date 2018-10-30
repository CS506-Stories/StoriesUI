import { HANDLESUBMIT, UPDATEGENERIC, } from './actionTypes';

const initialState = {
  displayLogin: true,
  loaded: true,
  email: '',
  handle: '',
  password: '',
  isLoading: false,
  isEmailValid: true,
  isPasswordValid: true,
  isHandleValid: true,

};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
   case UPDATEGENERIC:
    return Object.assign({}, state, {
      ...state,
      [action.name]: action.value
    });
   case HANDLESUBMIT:
      return Object.assign({}, state, {
       ...state,
       //TODO db checks for handle valid
       isHandleValid: true,
       isEmailValid: action.email,
       isPasswordValid: action.password,
     });
    default:
      return state;
  }
};

export default loginReducer;
