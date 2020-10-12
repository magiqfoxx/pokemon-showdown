import { createContext } from "react";
import { DataStore } from "./DataStore";

export const DataStoreContext = createContext(new DataStore());
