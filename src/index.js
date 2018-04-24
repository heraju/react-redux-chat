import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';

import Layout from './components/Layout';
import registerServiceWorker from './helpers/registerServiceWorker';
import store from './helpers/store';


const app = document.getElementById('root');


ReactDOM.render(<Provider store={store}>
  <Layout />
  </Provider>, app);

registerServiceWorker();
