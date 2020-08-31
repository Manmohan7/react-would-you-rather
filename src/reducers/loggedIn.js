import { SET_USER } from '../actions/loggedIn'

export default function loggedIn(state = null, action) {
  switch(action.type) {
    case SET_USER:
      return action.user

    default:
      return state
  }
}