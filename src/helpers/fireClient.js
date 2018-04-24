import firebase from 'firebase'
const firebaseConfig = {
                          apiKey: "AIzaSyCPOWEY3hj-W8gZwJYkGw_qZFFSMslvSt0",
                          authDomain: "private-chat-a83b5.firebaseapp.com",
                          databaseURL: "https://private-chat-a83b5.firebaseio.com",
                          projectId: "private-chat-a83b5",
                          storageBucket: "private-chat-a83b5.appspot.com",
                          messagingSenderId: "631977241557"
                       }

const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

export { app, auth}



