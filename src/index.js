import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';

import App from './components/App';
import registerServiceWorker from './helpers/registerServiceWorker';
import store from './helpers/store';


const app = document.getElementById('root');


ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, app);

registerServiceWorker();
