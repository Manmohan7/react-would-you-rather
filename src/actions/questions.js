export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addAnswerToQuestion(userId, qId, selectedOption) {
  return {
    type: ADD_ANSWER,
    selectedOption,
    userId,
    qId
  }
}