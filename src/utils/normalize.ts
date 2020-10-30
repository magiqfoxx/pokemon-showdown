import { Pokemon } from "../stores/DataStore";

export const normalizePokemon = (data: any) => {
    let newPokemon: Pokemon = {
      name: data.name,
      base_experience: data.base_experience,
      weight: data.weight,
      moves: [],
      stats: [],
      types: [],
      img:""
    };
    newPokemon.img = data.sprites.front_default;
    newPokemon.moves = data.moves.map((move: any) => move.move.name).slice(0, 3);
    newPokemon.stats = data.stats.map((stat: any) => {
      return { name: stat.stat.name, base_stat: stat.base_stat, effort: stat.effort };
    });
    newPokemon.types = data.types.map((type: any) => type.type.name).slice(0, 3);
    return newPokemon;
  };