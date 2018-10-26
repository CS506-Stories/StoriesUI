import { HANDLESUBMIT, UPDATEGENERIC, } from './actionTypes';

export function updateGeneric(name,value) {
  return { type: UPDATE_GENERIC, name, value}
}
export function handleSubmit(handle, email, password) {
  return { type: HANDLESUBMIT, handle, email, password}
}
