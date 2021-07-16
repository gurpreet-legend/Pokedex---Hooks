import React from 'react';
import Card from './Card.js';

const Cardlist = ({pokemon}) => {
    const Cardcomponent = pokemon.map((poke, i) => {
        return (
            <Card id={pokemon[i].id} name={pokemon[i].name} image={pokemon[i].image}/>
        )
    })
    return (
        <div>
            {Cardcomponent}
        </div>
    )
}

export default Cardlist;