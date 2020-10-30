import React, { useContext } from "react";

import { Grid, Select, Heading, Container, Text, jsx } from "theme-ui";
import { observer } from "mobx-react-lite";

import pokemons from "../assets/pokemon";
import {StateContext} from "../App";

export interface BattleProps {
  
}

const Battle: React.SFC<BattleProps> = observer(() => {
  const { setRedName, setBlueName } = useContext(StateContext);

  return (
    
    <Container sx={{ /*display: "grid", gridGap: "2rem"*/ }}>
      <Heading as="h1" sx={{ textAlign: "center" }}>
        Pokemon Showdown
      </Heading>
      <Grid columns={"2fr auto 2fr"}>
        <div>
          <Heading>Red team</Heading>
          <Select id="red" onChange={(e) => setRedName(e.target.value)}>
            {pokemons.map((pokemon) => {
              return (
                <option
                  key={pokemon}
                  value={pokemon}
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
          <Select id="blue" onChange={(e) => setBlueName(e.target.value)}>
            {pokemons.map((pokemon) => {
              return (
                <option
                  key={pokemon}
                  value={pokemon}
                >
                  {pokemon}
                </option>
              );
            })}
          </Select>
        </div>
      </Grid>
    </Container>
  );
});

export default Battle;
