import { State } from "../state/State";
import * as React from "react";

interface Props {
    children: JSX.Element;
    state: State;
}

const StateContext = React.createContext<State>(null as unknown as State);

export const StateProvider: React.FC<Props> = (props: Props) => (
    <StateContext.Provider value={props.state}>
        {props.children}
    </StateContext.Provider>
)

export const useState = () => React.useContext<State>(StateContext);
