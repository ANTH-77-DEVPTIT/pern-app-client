import { createContext } from "react";
import ProductAPI from "./app/services/productsService";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
    const state = {
        productsAPI: ProductAPI(),
    };

    return (
        <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
    );
};

export default DataProvider;
