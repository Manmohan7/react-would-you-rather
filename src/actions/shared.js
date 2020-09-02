import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addAnswerToUser } from './users'
import { receiveQuestions, addAnswerToQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialRequest() {
  return (dispatch) => {
    dispatch(showLoading())
    getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function saveAnswer(userId, qId, selectedOption) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveQuestionAnswer(userId, qId, selectedOption)
      .then(() => {
        dispatch(addAnswerToQuestion(userId, qId, selectedOption))
        dispatch(addAnswerToUser(userId, qId, selectedOption))
        dispatch(hideLoading())
      })
      .catch(() => {
        alert('Some error occurred')
        dispatch(hideLoading())
      })
  }
}