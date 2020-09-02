import { RECEIVE_USERS, ADD_ANSWER } from '../actions/users'

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }

    case ADD_ANSWER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.qId]: action.selectedOption
          }
        }
      }

    default:
      return state
  }
}