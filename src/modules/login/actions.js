import { LOGIN_SUCCESS, LOGGED_OUT } from './actionTypes';
import { handleLogin } from './functions';

export const REQUEST_USER = 'REQUEST_POSTS';
function requestUser(handle, email) {
  return (
    {
      type: REQUEST_USER,
      user: { handle, email },
    }
  );
}

function recieveUser(resp) {
  return (
    {
      type: LOGIN_SUCCESS,
      user: { resp },
    }
  );
}

function error() {
  return (
    {
      type: LOGGED_OUT,
    }
  );
}

export const handleSubmit = (justLogin, handle, email, password) => { // eslint-disable-line

  return function (dispatch) { // eslint-disable-line
    dispatch(requestUser(handle, email));

    handleLogin(justLogin, handle, email, password).then((resp) => {
      if (resp != null) {
        dispatch(recieveUser(resp));
      } else {
        dispatch(error());
      }
    });
  };
};
