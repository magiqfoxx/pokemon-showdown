import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Container, Text, jsx } from "theme-ui";
import Battle from "./components/Battle";
import Results from "./components/Results";
import { DataStoreContext } from "./stores";

export interface AppProps {}

const App: React.SFC<AppProps> = observer(() => {
  const dataStore = useContext(DataStoreContext);

  return (
    <Container
      p={5}
      bg="muted"
      sx={{
        height: "100%",
        minHeight: "100vh",
      }}
    >
      {dataStore.pokemons.length > 1 ? <Results /> : <Battle />}
      {dataStore.error && <Text>{dataStore.error}</Text>}
    </Container>
  );
});

export default App;
