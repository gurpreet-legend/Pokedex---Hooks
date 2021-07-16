import React from 'react';
import Cardlist from './Cardlist.js';
import {pokemon} from './Pokemon.js';

class App extends React.Component {
    render() {
      return (
        <Cardlist pokemon = {pokemon}/>
      );
    }
}

export default App;