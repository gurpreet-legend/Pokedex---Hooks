import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import App from './containers/App.js';
import {searchPokemons} from './reducers'

const logger = createLogger();
const store = createStore(searchPokemons, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

reportWebVitals();
