import { combineReducers } from "redux"
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'

import user from "./userReducer"
import message from "./messageReducer"

export default combineReducers({
  user,
  message
})
