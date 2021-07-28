import {
    CHANGE_SEARCH_FIELD,
    REQUEST_POKEMONS_PENDING,
    REQUEST_POKEMONS_SUCCESS,
    REQUEST_POKEMONS_FAILED
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
    
})

export const requestPokemons = () => (dispatch) => {
    dispatch({type: REQUEST_POKEMONS_PENDING})
    fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
    .then(res => res.json())
    .then(data => {
        const myArr = data.results.map((result_data, index) => ({
            id: index + 1,
            name: result_data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }))
        dispatch({type: REQUEST_POKEMONS_SUCCESS, payload: myArr})
    })
    .catch(err => dispatch({type: REQUEST_POKEMONS_FAILED, payload: err}));
}