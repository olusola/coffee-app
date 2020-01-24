import { DELETE_ME } from '../constants/'

export const deleteMe = (name) => {
  return {
    type: DELETE_ME,
    payload: name
  }
}