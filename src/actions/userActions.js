import { app, auth, db, twitterProvider, goggleProvier } from '../helpers/fireClient'

export function fetchUser(payload){
  return function(dispatch) {
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

export function getUser(id){
  return function(dispatch) {
  if(!id)
    return { type: "DISCARD_USER" }
  dispatch({type: "FETCH_USER"});
  db.collection("users").doc(id).get().then((querySnapshot) => {
    if(querySnapshot.exists){
      var data = querySnapshot.data();
      data['id'] = id;
      dispatch({
        type: "FETCH_USER_FULFILLED",
        payload: data
      });
    }
  });
  return { type: "FETCH_USER" }
  }
}

export function saveUser(id, data){
  return function(dispatch) {
    dispatch({type: "FETCH_USER"});
    db.collection("users").doc(id).set(data).then((querySnapshot) => {
    if(querySnapshot.exists){
      var data = querySnapshot.data();
      data['id'] = id;
      dispatch({
        type: "FETCH_USER_FULFILLED",
        payload: data
      });
    }
  });
  return { type: "FETCH_USER" }
  }
}

export function googleLogin(){
  return dispatch => auth.signInWithPopup(goggleProvier);
}

export function twitterLogin(){
  return dispatch => auth.signInWithPopup(twitterProvider);
}
