import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Button, Grid, Container, Select, Heading } from "theme-ui";
import Battle from "./components/Battle";
import Results from "./components/Results";
import { PlayerStoreContext } from "./stores";
import { toJS } from 'mobx';

export interface AppProps {}

const App: React.SFC<AppProps> = observer(() => {
  const playerStore = useContext(PlayerStoreContext);

  return ( 
  <Container p={5} bg="muted">
    { playerStore.pokemon1 && playerStore.pokemon2 ? (
    <Results />
  ) : (
    <Battle />
  )}
  </Container>
  )
});

export default App;
