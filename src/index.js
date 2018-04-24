import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import './index.css';

import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

var config = {
    apiKey: "AIzaSyCPOWEY3hj-W8gZwJYkGw_qZFFSMslvSt0",
    authDomain: "private-chat-a83b5.firebaseapp.com",
    databaseURL: "https://private-chat-a83b5.firebaseio.com",
    projectId: "private-chat-a83b5",
    storageBucket: "private-chat-a83b5.appspot.com",
    messagingSenderId: "631977241557"
};

firebase.initializeApp(config);

const app = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
  <Layout />
  </Provider>, app);

registerServiceWorker();
