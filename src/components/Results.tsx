import React, { useContext }  from "react";
import { Flex, Heading, jsx } from "theme-ui";

import PokemonCard from "./PokemonCard";
import { PlayerStoreContext } from "../stores";

export interface ResultsProps {}

const Results: React.SFC<ResultsProps> = () => {
  const playerStore = useContext(PlayerStoreContext);
  return (
    <>
    <Flex>
      <PokemonCard pokemonNo="pokemon1" />
      <PokemonCard pokemonNo="pokemon2" />
    </Flex>
    <Heading sx={{mt:5}}>The winner is: {playerStore.winner}</Heading>
    </>
  );
};

export default Results;
