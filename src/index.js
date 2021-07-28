import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import App from './containers/App.js';
import {searchPokemons, setPokemons} from './reducers'

const logger = createLogger();

const rootReducer = combineReducers({ searchPokemons, setPokemons});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

reportWebVitals();
