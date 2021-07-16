import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Card from './Card.js';
import {pokemon} from './pokemon.js'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <div>
    <Card id={pokemon[1].id} name={pokemon[1].name} image={pokemon[1].image}/>
    <Card id={pokemon[2].id} name={pokemon[2].name} image={pokemon[2].image}/>
    <Card id={pokemon[3].id} name={pokemon[3].name} image={pokemon[3].image}/>
    <Card id={pokemon[4].id} name={pokemon[4].name} image={pokemon[4].image}/>
    <Card id={pokemon[5].id} name={pokemon[5].name} image={pokemon[5].image}/>
    <Card id={pokemon[6].id} name={pokemon[6].name} image={pokemon[6].image}/>
    <Card id={pokemon[7].id} name={pokemon[7].name} image={pokemon[7].image}/>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
