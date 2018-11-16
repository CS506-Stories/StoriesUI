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

export function handleSubmit(justLogin, handle, email, password) {
  return function firstPromise(dispatch) {
    dispatch(requestUser(handle, email));

    handleLogin(justLogin, handle, email, password)
      .then((resp) => {
        if (resp != null) {
          dispatch(recieveUser(resp));
        } else {
          dispatch(error());
        }
      })
      .catch((err) => {
        // TODO: Create custom error handles
        console.log(err);
      });
  };
}
