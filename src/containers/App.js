import React, {useState, useEffect} from 'react';
import Cardlist from '../components/Cardlist.js';
import Searchbar from '../components/Searchbar.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import 'tachyons';

function App() {

    const [pokemons, setPokemons] = useState([]);
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (event) => {
        setSearchField(event.target.value) ;
    }

    useEffect(async () => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=898";
        const res = await fetch(url);
        const data = await res.json();
        const myArr = data.results.map((result_data, index) => ({
            id: index + 1,
            name: result_data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }))
        setPokemons(myArr);
    },[])
    //For breaking the continuos loop of calling useEffect, leave the array empty here so that useEffect only gets called when App renders once useEffect changes
    //It's just a shortcut for componentDidMount

    const filteredPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return(

        (!pokemons.length) ?
            <h1 className="f1">Loading...</h1> :
        (
            <div className="tc">
                <h1 className="f1">Pokedex</h1>
                <Searchbar searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist pokemons = {filteredPokemons}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    )
}

export default App;