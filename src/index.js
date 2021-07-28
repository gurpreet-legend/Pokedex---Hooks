import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'react';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import App from './containers/App.js';
import {searchPokemons} from './reducers.js'

const store = createStore(searchPokemons);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

reportWebVitals();
