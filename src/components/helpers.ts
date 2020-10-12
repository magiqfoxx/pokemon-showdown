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
export const getResults = async (store: any) => {
  const urls = [`https://pokeapi.co/api/v2/pokemon/${store.player1}`,`https://pokeapi.co/api/v2/pokemon/${store.player2}` ];
  const promises = urls.map(url=>fetch(url));
  Promise.all(promises)
  .then(results => {
    Promise.all(results.map(result=> result.json().then((data)=>store.setPokemons(getNewPokemon(data))))).then(()=>{
      const attack1 = toJS(store.pokemons)[0].stats.find((stat:any)=> stat.name ==="attack").base_stat;
      const attack2 = toJS(store.pokemons)[1].stats.find((stat:any)=> stat.name ==="attack").base_stat;
      store.setWinner(attack1 > attack2 ? store.pokemons[0].name : store.pokemons[1].name);
    });
  });
};
export const setResults = (store: any) => {
  store.setPokemon1(getNewPokemon(example));
  store.setPokemon2(getNewPokemon(example));
}