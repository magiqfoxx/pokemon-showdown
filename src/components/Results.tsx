import React, {useEffect, useContext } from "react";
import { Flex, Heading, Container, jsx } from "theme-ui";

import PokemonCard from "./PokemonCard";
import {StateContext} from "../App";
import Offline from "./Offline";

export interface ResultsProps {
  winner: string,
}

const Results: React.SFC<ResultsProps> = ({winner}) => {
  const audio = new Audio("./battle.mp3");
  const { redData, blueData } = useContext(StateContext);

  useEffect(() => {
    //audio.play();
  }, [audio]);
  return (
    <>
      <Heading sx={{ textAlign: "center", color: "#673AB7" }}>
        The winner is: {winner}
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
        {redData === "offline" ? <Offline/> : <PokemonCard pokemon={redData} />}
        {blueData === "offline" ? <Offline/> : <PokemonCard pokemon={blueData} />}
      </Flex>
    </>
  );
};

export default Results;
