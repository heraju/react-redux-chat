import { app, auth, twitterProvider, goggleProvier } from '../helpers/fireClient'

export function fetchUser(payload){
  return function(dispatch) {
    dispatch({type: "FETCH_USER"});
    auth.signInWithEmailAndPassword(payload.uname, payload.pass)
    .catch(error => {console.log(error);})
    .then(user => {
      dispatch({
        type: "AUTH_USER_SET",
        payload: user
      })
    })
  }
}

export function googleLogin(){
  return dispatch => auth.signInWithPopup(goggleProvier);
}

export function twitterLogin(){
  return dispatch => auth.signInWithPopup(twitterProvider);
}
