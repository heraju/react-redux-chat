import React from 'react';

import Layout from './Layout'
import withAuthentication from './withAuthentication'

const App = () =>
    <div className="app">
      <Layout />
    </div>


export default withAuthentication(App);
