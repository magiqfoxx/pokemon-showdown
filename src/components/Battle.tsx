import React, { useContext } from "react";

import { Button, Grid, Select, Heading, Container, Text, jsx } from "theme-ui";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

import { DataStoreContext } from "../stores";
import pokemons from "../assets/pokemon";
import { getResults } from "./helpers";

export interface BattleProps {}

const Battle: React.SFC<BattleProps> = observer(() => {
  const dataStore = useContext(DataStoreContext);
  return (
    <Container sx={{ display: "grid", gridGap: "2rem" }}>
      <Heading as="h1" sx={{ textAlign: "center" }}>
        Pokemon Showdown
      </Heading>
      <Grid columns={"2fr auto 2fr"}>
        <div>
          <Heading>Red team</Heading>
          <Select id="red" onChange={(e) => dataStore.setRed(e.target.value)}>
            {pokemons.map((pokemon) => {
              return (
                <option
                  key={pokemon}
                  value={pokemon}
                  selected={dataStore.red === pokemon}
                >
                  {pokemon}
                </option>
              );
            })}
          </Select>
        </div>
        <Text sx={{ margin: "auto" }}>vs</Text>
        <div>
          <Heading>Blue team</Heading>
          <Select id="blue" onChange={(e) => dataStore.setBlue(e.target.value)}>
            {pokemons.map((pokemon) => {
              return (
                <option
                  key={pokemon}
                  value={pokemon}
                  selected={dataStore.blue === pokemon}
                >
                  {pokemon}
                </option>
              );
            })}
          </Select>
        </div>
      </Grid>
      <Button onClick={() => getResults(dataStore)}>Fight!</Button>
    </Container>
  );
});

export default Battle;
