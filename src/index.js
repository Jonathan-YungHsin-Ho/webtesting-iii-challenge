import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import { reducer } from './reducers/';

import Dashboard from './dashboard/Dashboard';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root'),
);
