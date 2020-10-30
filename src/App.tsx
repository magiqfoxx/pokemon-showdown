import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { Container, Text, jsx } from "theme-ui";
import Battle from "./components/Battle";
import Results from "./components/Results";
import {useWinner} from "./hooks/useWinner";

import Loading from "./components/Loading";

//export const PokemonContext = React.createContext({red:{name:"", data:{}}, blue:{ name:"",data:{}}});
export const StateContext = React.createContext({
  redName: "",
  redData: {},
  setRedName: (name:string) => {},
  setRedData: (name:string) => {},
  blueName: "",
  blueData: {},
  setBlueName: (name:string) => {},
  setBlueData: (name:string) => {}
});
export interface AppProps {
}

const App: React.SFC<AppProps> = observer(() => {

  const [redName, setRedName] = useState("");
  const [blueName, setBlueName] = useState("");
  const [redData, setRedData] = useState("");
  const [blueData, setBlueData] = useState("");
  const value ={redName, blueName, redData, blueData, setRedName, setBlueName, setRedData, setBlueData};
  const {loading, error, results} = useWinner(value);


  return (
    <StateContext.Provider value={{redName, blueName, setRedName, setBlueName, redData, blueData, setRedData, setBlueData }}>
    <Container
      p={5}
      bg="muted"
      sx={{
        height: "100%",
        minHeight: "100vh",
      }}
    >
      {loading && <Loading />}
      {results ? <Results winner={results} /> : <Battle />}
      {error && <span sx={{color:"red"}}>{error}</span>}
      {error && <Text>There was an error</Text>}
    </Container>
    </StateContext.Provider>
  );
});

export default App;
