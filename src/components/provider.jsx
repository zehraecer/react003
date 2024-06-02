import { useReducer } from "react";
import { GlobalStateContext } from "./context";
import { initalState } from "./initialState";
import { Reducer } from "./reducer";

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initalState)

    return <GlobalStateContext.Provider value={{ state, dispatch }}>{children}</GlobalStateContext.Provider>
}