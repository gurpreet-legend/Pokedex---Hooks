import React from 'react';
import Cardlist from './Cardlist.js';
import Searchbar from './Searchbar.js';
import 'tachyons';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
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
    
    async componentDidMount () {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=150";
        const res = await fetch(url);
        const data = await res.json();
        const myArr = data.results.map((result_data, index) => ({
            id: index + 1,
            name: result_data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }))
        this.setState({pokemons: myArr});
    }

    render() {
        const filteredPokemons = this.state.pokemons.filter((pokemons) => {
            return pokemons.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if(this.state.pokemons.length === 0){
            return (
                <h1 className="f1">Loading...</h1>
            )
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f1">Pokedex</h1>
                    <Searchbar searchChange = {this.onSearchChange}/>
                    <Cardlist pokemons = {filteredPokemons}/>
                </div>
            );
        }
    }
}

export default App;