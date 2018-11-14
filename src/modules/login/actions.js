import { LOGIN_SUCCESS, LOGGED_OUT } from './actionTypes';
import { handleLogin } from './functions';

export const REQUEST_USER = 'REQUEST_POSTS';
function requestUser(justLogin, handle, email, password) {
  return (
    {
      type: REQUEST_USER,
      user: { email, password },
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
    dispatch(requestUser(justLogin, handle, email, password));

    handleLogin(justLogin, handle, email, password).then((resp) => {
      if (resp != null) {
        dispatch(recieveUser(resp));
      } else {
        dispatch(error());
      }
    });
  };
};
