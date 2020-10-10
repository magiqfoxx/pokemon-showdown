import React, { useContext } from "react";

import { Button, Grid, Container, Select, Heading } from "theme-ui";
import { observer } from "mobx-react-lite";
import { playerStoreContext } from "../stores/index";

import pokemons from "../assets/pokemon";

const Battle = observer(() => {
  const playerStore = useContext(playerStoreContext);

  return (
    <Container p={5} bg="muted">
      <Grid>
        <Heading>Player 1</Heading>
        <Select
          id="player1"
          onChange={(e) => (playerStore.player1 = e.target.value)}
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
          onChange={(e) => (playerStore.player2 = e.target.value)}
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
        <Button onClick={() => console.log(playerStore)}>Fight!</Button>
      </Grid>
    </Container>
  );
});

export default Battle;
