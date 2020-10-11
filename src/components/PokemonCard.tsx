import React, { useContext } from "react";
import { Container, Heading, Flex, Text, Grid, jsx } from "theme-ui";

import { Pokemon } from "../stores/PlayerStore";
import { PlayerStoreContext } from "../stores";

export interface PokemonCardProps {
  pokemonNo: string;
}

const PokemonCard: React.SFC<PokemonCardProps> = ({ pokemonNo }) => {
  const playerStore: any = useContext(PlayerStoreContext);
  const {
    name,
    img,
    base_experience,
    moves,
    stats,
    types,
    weight,
  }: Pokemon = playerStore[pokemonNo];

  return (
    <Container>
      <Heading>{name}</Heading>
      <img src={img} alt={name} />
      <Text variant='caps'>Base experience: {base_experience}</Text>
      <Text variant='caps'>Moves:</Text>
        {moves.map((move) => {
          return <span>{`${move}, `}</span>;
        })}
      <Text variant='caps'>Types:</Text>
        {types.map((type) => {
          return <span>{`${type}, `}</span>;
        })}
      <Text variant='caps'>Weight: {weight}</Text>
      <div>
        <Heading as="h2" sx={{my:3}}>Stats</Heading>
        {stats.map((stat) => {
          return (
            <>
              <Text variant='caps'>{stat.name}</Text>
              <Grid gap={2} columns={[ 2, 2 ]}><span>base stat: {stat.base_stat}</span>
              <span>effort: {stat.effort}</span></Grid>
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default PokemonCard;
