import { AsyncStorage } from 'react-native';
import { LOGIN_SUCCESS } from './actionTypes';

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
    case LOGIN_SUCCESS:
      var user = action.user;
      var refreshToken = user.refreshToken;
      AsyncStorage.setItem('refreshToken', refreshToken);
      AsyncStorage.setItem('user', JSON.stringify(user));

      return Object.assign({}, ...state, { loggedIn: true, user: action.user });

    default:
      return state;
  }
};

export default loginReducer;
