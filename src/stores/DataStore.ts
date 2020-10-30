import { action, configure, observable, makeObservable } from "mobx";

configure({ enforceActions: "always" });

interface Stat {
  name: string;
  base_stat: number;
  effort: number;
}

export interface Pokemon {
  name: string;
  img: string;
  base_experience: number;
  moves: Array<string>;
  stats: Array<Stat>;
  types: Array<string>;
  weight: string;
}

export class DataStore {
  @observable red: string = "bulbasaur";
  @observable blue: string = "ivysaur";
  @observable pokemons: Array<Pokemon> | [] = [];
  @observable winner: string = "";
  @observable error: string = "";


  constructor() {
        makeObservable(this)
  }

  @action
  setRed = (red: string) => {
    this.red = red;
  };

  @action
  setBlue = (blue: string) => {
    this.blue = blue;
  };

    @action
  setPokemons = (pokemon: Pokemon) => {
    this.pokemons = [...this.pokemons, pokemon];
  };
  @action
  setWinner = (pokemon: string) => {
    this.winner = pokemon;
  };
  @action
  setError = (error: string) => {
    this.error = error;
  };
}