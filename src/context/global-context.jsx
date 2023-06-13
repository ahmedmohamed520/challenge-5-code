import { createContext, useContext, useReducer, useState } from "react";
import { infoReducer } from "./global-reducer";
import { ADD_ON } from "../actions";

export const globalContext = createContext();
const GlobalProvider = ({ children }) => {
    const [info, dispatchInfo] = useReducer(infoReducer, {
        addOns: [],
    });

    return <globalContext.Provider value={{}}>{children}</globalContext.Provider>;
};

export const useGlobal = () => {
    return useContext(globalContext);
};
export default GlobalProvider;
