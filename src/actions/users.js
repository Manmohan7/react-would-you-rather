export const RECEIVE_USERS = 'RECEIEVE_USERS'
export const ADD_ANSWER = 'ADD_USER_ANSWER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addAnswerToUser(userId, qId, selectedOption) {
  return {
    type: ADD_ANSWER,
    userId,
    qId,
    selectedOption
  }
}