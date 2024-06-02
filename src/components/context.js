import { useContext, createContext } from "react";
import { initalState } from "./initialState";


export const GlobalStateContext = createContext({
    state: initalState,
    dispatch: () => {

    }
})


export default function UseGlobalState() {
    return useContext(GlobalStateContext)
}