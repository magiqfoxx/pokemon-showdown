import { Pokemon } from "../stores/PlayerStore";
import {example} from "../assets/example";
import { toJS } from 'mobx';

const getNewPokemon = (data: any) => {
  let newPokemon: Pokemon = {
    name: data.name,
    base_experience: data.base_experience,
    weight: data.weight,
    moves: [],
    stats: [],
    types: [],
  };
  newPokemon.img = data.sprites.front_default;
  newPokemon.moves = data.moves.map((move: any) => move.move.name).slice(0, 3);
  newPokemon.stats = data.stats.map((stat: any) => {
    return { name: stat.stat.name, base_stat: stat.base_stat, effort: stat.effort };
  });
  newPokemon.types = data.types.map((type: any) => type.type.name).slice(0, 3);
  return newPokemon;
};
export const getResults = (store: any) => {
  const getPokemon1 = fetch(`https://pokeapi.co/api/v2/pokemon/${store.player1}`)
    // .then(function (response) {
    //   if (response.status !== 200) {
    //     console.log(
    //       "Looks like there was a problem. Status Code: " + response.status
    //     );
    //     return;
    //   }

    //   response.json().then(function (data) {
    //     store.setPokemon1(getNewPokemon(data));
    //   });
    // })
    // .catch(function (err) {
    //   console.log("Fetch Error :-S", err);
    // });
  const getPokemon2 = fetch(`https://pokeapi.co/api/v2/pokemon/${store.player2}`)
    // .then(function (response) {
    //   if (response.status !== 200) {
    //     console.log(
    //       "Looks like there was a problem. Status Code: " + response.status
    //     );
    //     return;
    //   }

    //   response.json().then(function (data) {
    //     store.setPokemon2(getNewPokemon(data));
    //   });
    // })
    // .catch(function (err) {
    //   console.log("Fetch Error :-S", err);
    // });
    // getPokemon1();
    // getPokemon2();
    // @ts-ignore
    Promise.all([getPokemon1, getPokemon2]).then((responses)=>{
      responses.forEach(response=> response.json().then(data=> store.setPokemons(getNewPokemon(data))));
      console.log(toJS(store))
      const attack1 = toJS(store.pokemons[0]).stats.find((stat:any)=> stat.name ==="attack").base_stat;
      const attack2 = toJS(store.pokemons[1]).stats.find((stat:any)=> stat.name ==="attack").base_stat;
      store.setWinnder(attack1 > attack2 ? store.pokemon1 : store.pokemon2);
    });
};
export const setResults = (store: any) => {
  store.setPokemon1(getNewPokemon(example));
  store.setPokemon2(getNewPokemon(example));
}