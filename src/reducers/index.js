import { combineReducers } from 'redux'

import users from './users'
import questions from './questions'
import loggedIn from './loggedIn'

export default combineReducers({
  users,
  questions,
  loggedIn,
})