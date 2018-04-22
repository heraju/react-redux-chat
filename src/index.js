import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const app = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
  <Layout />
  </Provider>, app);

registerServiceWorker();
