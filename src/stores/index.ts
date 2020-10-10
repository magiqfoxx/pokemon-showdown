import { observable } from "mobx";
import { createContext } from "react";

class PlayerStore {
  @observable player1 = "";
  @observable player2 = "";
}

export const playerStoreContext = createContext(new PlayerStore());
