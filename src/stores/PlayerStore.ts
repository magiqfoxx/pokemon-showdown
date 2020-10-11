import { action, configure, observable, makeObservable } from "mobx";

configure({ enforceActions: "always" });

interface Stat {
  name: string;
  base_stat: number;
  effort: number;
}

export interface Pokemon {
  name?: string;
  img?: string;
  base_experience: number;
  moves: Array<string>;
  stats: Array<Stat>;
  types: Array<string>;
  weight: string;
}

export class PlayerStore {
  @observable player1: string = "bulbasaur";
  @observable player2: string = "ivysaur";
  @observable pokemon1: Pokemon | undefined = undefined;
  @observable pokemon2: Pokemon | undefined = undefined;
  @observable pokemons: Array<Pokemon> | [] = [];
  @observable winner: string = "";


  constructor() {
        makeObservable(this)
  }


  @action
  setPlayer1 = (player1: string) => {
    this.player1 = player1;
  };

  @action
  setPlayer2 = (player2: string) => {
    this.player2 = player2;
  };

  @action
  setPokemon1 = (pokemon1: Pokemon) => {
    this.pokemon1 = pokemon1;
  };

  @action
  setPokemon2 = (pokemon2: Pokemon) => {
    this.pokemon2 = pokemon2;
  };
    @action
  setPokemons = (pokemon: Pokemon) => {
    this.pokemons.push(pokemon);
  };
}