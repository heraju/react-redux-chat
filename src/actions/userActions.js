import { app, auth } from '../helpers/fireClient'

export function fetchUser(payload, dispatcher) {
  auth.signInWithEmailAndPassword(payload.uname, payload.pass)
  .catch(error => {console.log(error);})
  .then(user => {
    dispatcher({
      type: "FETCH_USER_FULFILLED",
      payload: {
      name: user.email,
      id: user.uid
      }
    })
  })
  return { type: "FETCH_USER"}
}


