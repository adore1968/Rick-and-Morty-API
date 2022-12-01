import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const url = `https://rickandmortyapi.com/api/character?page=`;

export function AppContextProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
