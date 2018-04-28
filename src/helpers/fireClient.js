import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
                          apiKey: "AIzaSyCPOWEY3hj-W8gZwJYkGw_qZFFSMslvSt0",
                          authDomain: "private-chat-a83b5.firebaseapp.com",
                          databaseURL: "https://private-chat-a83b5.firebaseio.com",
                          projectId: "private-chat-a83b5",
                          storageBucket: "private-chat-a83b5.appspot.com",
                          messagingSenderId: "631977241557"
                       }

const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()
const goggleProvier = new firebase.auth.GoogleAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const db = firebase.firestore()

export { app, auth, db, twitterProvider, goggleProvier}



//firebase.database().ref('users').orderByChild('updatedAt')
