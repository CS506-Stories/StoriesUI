import UPDATE from './actionTypes';

export const updateLogin = () => ( // eslint-disable-line
  {
    type: UPDATE,
    payload: {
      str: 'Button Pressed!',
    },
  }
);
