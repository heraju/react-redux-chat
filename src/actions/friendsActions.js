import { app, auth, db } from '../helpers/fireClient'

export function fetchFriends(dispatcher) {
  db.collection("users").get().then((querySnapshot) => {
    var friends = []
    querySnapshot.forEach((doc) => {
      var data = doc.data()
      debugger;
      friends.push({id: doc.id, first_name: doc.data().first_name, last_name: doc.data().last_name})
    });
    dispatcher({
      type: "FETCH_FRIENDS_FULFILLED",
      payload: friends
    })
});
  return { type: "FETCH_FRIENDS", payload: []}
}


