import { LOGIN, SIGNUP, LOGOUT, } from './actionTypes';

export const updateLogin = () => ( // eslint-disable-line
  {
    type: LOGIN,
    payload: {
      str: 'Button Pressed!',
    },
    type: SIGNUP,
    payload: {
      str: 'Button Pressed!',
    },
    type: LOGOUT,
    payload: {
      str: 'Button Pressed!',
    },
  }
);
