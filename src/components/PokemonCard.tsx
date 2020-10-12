import React, { useContext } from "react";
import { Container, Heading, Text, Grid, jsx } from "theme-ui";

import { Pokemon } from "../stores/DataStore";
import { DataStoreContext } from "../stores";

export interface PokemonCardProps {
  pokemonNo: number;
}

const PokemonCard: React.SFC<PokemonCardProps> = ({ pokemonNo }) => {
  const playerStore: any = useContext(DataStoreContext);
  const {
    name,
    img,
    base_experience,
    moves,
    stats,
    types,
    weight,
  }: Pokemon = playerStore.pokemons[pokemonNo];

  return (
    <Container
      sx={{
        padding: "2rem",
      }}
    >
      <Heading>{name}</Heading>
      <img src={img} alt={name} />
      <Text variant="caps">Base experience: {base_experience}</Text>
      <Text variant="caps">Moves:</Text>
      {moves.map((move, i) => {
        return <span key={i}>{`${move}, `}</span>;
      })}
      <Text variant="caps">Types:</Text>
      {types.map((type, i) => {
        return <span key={i}>{`${type}, `}</span>;
      })}
      <Text variant="caps">Weight: {weight}</Text>
      <div>
        <Heading as="h2" sx={{ my: 3 }}>
          Stats
        </Heading>
        {stats.map((stat, i) => {
          return (
            <div key={i}>
              <Text variant="caps">{stat.name}</Text>
              <Grid gap={2} columns={[2, 2]}>
                <span>base stat: {stat.base_stat}</span>
                <span>effort: {stat.effort}</span>
              </Grid>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PokemonCard;
