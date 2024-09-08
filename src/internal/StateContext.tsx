import React, { createContext, useContext } from "react";
import { State } from "../state/State";

interface Props {
  state: State;
  children: React.ReactNode;
}

const StateContext = createContext<State | undefined>(undefined);

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};

export const StateProvider: React.FC<Props> = ({ state, children }) => (
  <StateContext.Provider value={state}>{children}</StateContext.Provider>
);
