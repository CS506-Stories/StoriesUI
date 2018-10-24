import React from 'react';

import { Provider } from 'react-redux';

import Router from './src/config/routes';
import store from './src/redux/store';

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
