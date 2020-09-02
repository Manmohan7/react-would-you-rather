import { RECEIVE_QUESTIONS, ADD_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }

    case ADD_ANSWER:
      return {
        ...state,
        [action.qId]: {
          ...state[action.qId],
          [action.selectedOption]: {
            ...state[action.qId][action.selectedOption],
            votes: [
              ...state[action.qId][action.selectedOption].votes,
              action.userId
            ]
          }
        }
      }

    default:
      return state
  }
}