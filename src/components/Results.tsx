import React, { useContext }  from "react";
import { Flex, Heading, jsx } from "theme-ui";
import { toJS } from 'mobx';
import { observer } from "mobx-react-lite";

import PokemonCard from "./PokemonCard";
import { PlayerStoreContext } from "../stores";

export interface ResultsProps {}

const Results: React.SFC<ResultsProps> = observer(() => {
  const playerStore = useContext(PlayerStoreContext);
  return (
    <>
    <Flex>
      <PokemonCard pokemonNo={0} />
      <PokemonCard pokemonNo={1} />
    </Flex>
    <Heading sx={{mt:5}}>The winner is: {playerStore.winner}</Heading>
    </>
  );
});

export default Results;
