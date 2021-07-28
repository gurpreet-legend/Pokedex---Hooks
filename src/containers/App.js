import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Cardlist from '../components/Cardlist.js';
import Searchbar from '../components/Searchbar.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import 'tachyons';

import {setSearchField, requestPokemons} from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchPokemons.searchField,
        isPending: state.setPokemons.isPending,
        pokemons: state.setPokemons.pokemons,
        error: state.setPokemons.error
    }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
         onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
         onRequestPokemons: () => dispatch(requestPokemons())
     }
 }

function App (props) {

    // STATE DECLARATION USING HOOKS WITHOUT USING REDUX:
    // const [pokemons, setPokemons] = useState([]);
    // const [searchField, setSearchField] = useState('');

    useEffect(async () => {
        props.onRequestPokemons();
    },[])
    //For breaking the continuos loop of calling useEffect, leave the array empty here so that useEffect only gets called when App renders once useEffect changes
    //It's just a shortcut for componentDidMount

    const filteredPokemons = props.pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(props.searchField.toLowerCase());
    })

    return(
        (props.isPending) ?
            <h1 className="f1">Loading...</h1> :
        (
            <div className="tc">
                <h1 className="f1">Pokedex</h1>
                <Searchbar searchChange = {props.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist pokemons = {filteredPokemons}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App) ;