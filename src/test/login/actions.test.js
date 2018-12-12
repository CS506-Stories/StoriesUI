import error from '../../modules/login/actions.js';
import { LOGIN_SUCCESS, LOGGED_OUT } from '../../modules/login/actionTypes';


test('Verify false data throws error', () => {
  expect(error().not.toBeNull());
});
