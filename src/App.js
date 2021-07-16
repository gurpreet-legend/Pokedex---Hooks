import React from 'react';
import Cardlist from './Cardlist.js';
import {pokemons} from './Pokemons.js';
import Searchbar from './Searchbar.js';
import 'tachyons';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: pokemons,
            searchField : ''
        }
    }

    /*NOTE : Here 'this' refers to the element that received the event and that element is input of Searchbar*/
    /*onSearchChange(event) {
        const filteredPokemons = this.pokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        // console.log(event.target.value);
        console.log(filteredPokemons);
    }*/


    /*To make 'this' refering to the App class, change the function to arrow function syntax*/
    onSearchChange = (event) => {
        this.setState({searchField : event.target.value}) ;
    }
    
    render() {
        const filteredPokemons = this.state.pokemons.filter((pokemons) => {
            return pokemons.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log(filteredPokemons);
        return (
            <div className="tc">
                <h1 className="f1">Pokedex</h1>
                <Searchbar searchChange = {this.onSearchChange}/>
                <Cardlist pokemons = {filteredPokemons}/>
            </div>
      );
    }
}

export default App;