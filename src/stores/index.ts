import { createContext } from "react";
import { PlayerStore } from "./PlayerStore";

export const PlayerStoreContext = createContext(new PlayerStore());
