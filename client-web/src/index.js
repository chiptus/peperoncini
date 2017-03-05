import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import thunkMiddleware from 'redux-thunk';

import 'font-awesome/css/font-awesome.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// import defaultState from './lib/default-state';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import './index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));



ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
