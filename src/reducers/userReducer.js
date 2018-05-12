import { CONST } from '../constants'
import React from 'react'
import { Redirect } from 'react-router-dom'

export default function userReducer(state = { currentUser: {} }, action) {
  switch(action.type) {
    case CONST.FETCH_USER:
      return { ...state, currentUser: action.payload }
    case CONST.LOGIN_OR_SIGNUP:
      <Redirect to='/chats'/>
      return state
    default: return state
  }
}
