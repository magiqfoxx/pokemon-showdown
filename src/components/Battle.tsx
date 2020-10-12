import React, { useContext } from "react";

import { Button, Grid, Container, Select, Heading } from "theme-ui";
import { observer } from "mobx-react-lite";
import {isObservable} from "mobx"

import { PlayerStoreContext } from "../stores";
import pokemons from "../assets/pokemon";
import { getResults } from "./helpers";

export interface BattleProps {}

const Battle: React.SFC<BattleProps> = observer(() => {
  const playerStore = useContext(PlayerStoreContext);
  return (
      <Grid>
        <Heading>Player 1</Heading>
        <Select
          id="player1"
          onChange={(e) => playerStore.setPlayer1(e.target.value)}
        >
          {pokemons.map((pokemon) => {
            return (
              <option
                key={pokemon}
                value={pokemon}
                selected={playerStore.player1 === pokemon}
              >
                {pokemon}
              </option>
            );
          })}
        </Select>
        <Heading>Player 2</Heading>
        <Select
          id="player2"
          onChange={(e) => (playerStore.setPlayer2(e.target.value))}
        >
          {pokemons.map((pokemon) => {
            return (
              <option
                key={pokemon}
                value={pokemon}
                selected={playerStore.player2 === pokemon}
              >
                {pokemon}
              </option>
            );
          })}
        </Select>
        <Button
          onClick={() => getResults(playerStore)}
        >
          Fight!
        </Button>
      </Grid>

  );
});

export default Battle;
