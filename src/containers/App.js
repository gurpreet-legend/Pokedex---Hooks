import React from 'react';
import Cardlist from '../components/Cardlist.js';
import Searchbar from '../components/Searchbar.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import 'tachyons';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            searchField : ''
        }
    }

    /*To make 'this' refering to the App class, change the function to arrow function syntax*/
    onSearchChange = (event) => {
        this.setState({searchField : event.target.value}) ;
    }
    
    async componentDidMount () {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=898";
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
        const {pokemons, searchField} = this.state;
        const filteredPokemons = pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if(!pokemons.length){
            return (
                <h1 className="f1">Loading...</h1>
            )
        }
        else{
            return (
                <div className="tc">
                    <h1 className="f1">Pokedex</h1>
                    <Searchbar searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist pokemons = {filteredPokemons}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;