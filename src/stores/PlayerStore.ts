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
  setPokemons = (pokemon: Pokemon) => {
    this.pokemons = [...this.pokemons, pokemon];
  };
  @action
  setWinner = (pokemon: string) => {
    this.winner = pokemon;
  };
}