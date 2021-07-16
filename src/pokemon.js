// import React from "react";

export const pokemon = [
    {id: 1, name: "bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
    {id: 2, name: "ivysaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},
    {id: 3, name: "venusaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},
    {id: 4, name: "charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
    {id: 5, name: "charmeleon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},
    {id: 6, name: "charizard", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},
    {id: 7, name: "squirtle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},
    {id: 8, name: "wartortle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},
    {id: 9, name: "blastoise", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},
    {id: 10, name: "caterpie", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"},
    {id: 11, name: "metapod", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"},
    {id: 12, name: "butterfree", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"},
    {id: 13, name: "weedle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"},
    {id: 14, name: "kakuna", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"},
    {id: 15, name: "beedrill", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"},
    {id: 16, name: "pidgey", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"},
    {id: 17, name: "pidgeotto", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"},
    {id: 18, name: "pidgeot", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"},
    {id: 19, name: "rattata", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"},
    {id: 20, name: "raticate", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"},
    {id: 21, name: "spearow", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"},
    {id: 22, name: "fearow", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"},
    {id: 23, name: "ekans", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"},
    {id: 24, name: "arbok", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"},
    {id: 25, name: "pikachu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"},
    {id: 26, name: "raichu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"},
    {id: 27, name: "sandshrew", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"},
    {id: 28, name: "sandslash", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"},
    {id: 29, name: "nidoran-f", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"},
    {id: 30, name: "nidorina", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"},
    {id: 31, name: "nidoqueen", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"},
    {id: 32, name: "nidoran-m", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"},
    {id: 33, name: "nidorino", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"},
    {id: 34, name: "nidoking", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"},
    {id: 35, name: "clefairy", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"},
    {id: 36, name: "clefable", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"},
    {id: 37, name: "vulpix", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"},
    {id: 38, name: "ninetales", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"},
    {id: 39, name: "jigglypuff", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"},
    {id: 40, name: "wigglytuff", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"},
    {id: 41, name: "zubat", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"},
    {id: 42, name: "golbat", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"},
    {id: 43, name: "oddish", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"},
    {id: 44, name: "gloom", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"},
    {id: 45, name: "vileplume", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"}
]

// export class fetchPokemon extends React.Component {
//     state = {
//         loading: true,
//         pokemon: null
//     };

//     async componentDidMount() {
//         const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
//         const res = await fetch(url);
//         const data = await res.json();
//         const myArr = data.results.map((result_data, index) => ({
//             id: index + 1,
//             name: result_data.name,
//             image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
//         }))
//         console.log(myArr);
//         this.setState({pokemon: myArr, loading: false})
//     };

    // render() {
    //     return (
    //         <div>
    //             {this.state.loading || !this.state.pokemon ? (
    //             <div>loading...</div> 
    //             ) : (
    //                 <div>
    //                     <div>{this.state.pokemon.image}</div>
    //                     <div>{this.state.pokemon.name}</div>
    //                     <div>{this.state.pokemon.id}</div>
    //                 </div>
    //             ) }
    //         </div>
    //     )
    // }
// }

// let pokemon = fetchPokemon();
// export default pokemon;

