import React from 'react';
import Card from './Card.js';

const Cardlist = ({pokemons}) => {
    const cardsArray = pokemons.map((poke, i) => {
        return (
            <Card 
                key={pokemons[i].id} 
                id={pokemons[i].id} 
                name={pokemons[i].name} 
                image={pokemons[i].image}
            />
        )
    })
    return (
        <div className="grid">
            {cardsArray}
        </div>
    )
}

export default Cardlist;