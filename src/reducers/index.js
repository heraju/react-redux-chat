import { combineReducers } from "redux"
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'

import user from "./userReducer"
import message from "./messageReducer"
import friends from "./friendsReducer"
import session from "./sessionReducer"

export default combineReducers({
  user,
  message,
  friends,
  session
})
