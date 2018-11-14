import { LOGIN_SUCCESS, LOGGED_OUT } from './actionTypes';
import { handleLogin } from './functions';

export default function handleSubmit(justLogin, handle, email, password) {
  handleLogin(justLogin, handle, email, password).then((resp) => {
    console.log("ACTIONS RESPONSE");
    console.log(resp);
    if (resp != null) {
      console.log("SENT YES");
      return {
        type: LOGIN_SUCCESS,
        user: { handle },
      };
    }

    return {
      type: LOGGED_OUT,
    };
  });
}
