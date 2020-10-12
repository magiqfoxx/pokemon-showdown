import React, { useContext, useEffect } from "react";
import { Flex, Heading, Container, jsx } from "theme-ui";
import { observer } from "mobx-react-lite";

import PokemonCard from "./PokemonCard";
import { DataStoreContext } from "../stores";

export interface ResultsProps {}

const Results: React.SFC<ResultsProps> = observer(() => {
  const dataStore = useContext(DataStoreContext);
  const audio = new Audio("./battle.mp3");

  useEffect(() => {
    audio.play();
  }, [audio]);
  return (
    <>
      <Heading sx={{ textAlign: "center", color: "#673AB7" }}>
        The winner is: {dataStore.winner}
      </Heading>
      <Container
        sx={{
          background:
            "linear-gradient(0deg, rgba(246,0,0,1) 12%, rgba(252,133,133,1) 100%)",
          clipPath: "polygon(0 0, 55% 0, 45% 100%, 0% 100%)",
          height: "100%",
          position: "absolute",
          zIndex: "1",
          width: "calc(100% - 10rem)",
          border: "5px solid black",
        }}
      />
      <Container
        sx={{
          background:
            "linear-gradient(0deg, rgba(0,0,245,1) 12%, rgba(0,133,200,1) 100%)",
          height: "100%",
          position: "absolute",
          zIndex: "0",
          width: "calc(100% - 8rem)",
          border: "5px solid black",
        }}
      />
      <Flex
        sx={{
          position: "relative",
          zIndex: "2",
        }}
      >
        <PokemonCard pokemonNo={0} />
        <PokemonCard pokemonNo={1} />
      </Flex>
    </>
  );
});

export default Results;
