import types from './actionTypes';

export default function contSplash() {
  return (dispatch) => {
    dispatch({ type: types.CONT });
  };
}
