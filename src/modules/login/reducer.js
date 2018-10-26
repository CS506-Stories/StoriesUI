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
export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

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
       //TODO db checks
       isHandleValid: true,
       isEmailValid: this.validateEmail(action.email),
       isPasswordValid: action.pass.length >= 8,
     });
    default:
      return state;
  }
};

export default loginReducer;
