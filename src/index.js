import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
// dev tool
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
// import { getUsers } from './action/users.actions';

const store =createStore(
  rootReducer,composeWithDevTools(applyMiddleware(thunk))
)
// store.dispatch(getUsers());




ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
