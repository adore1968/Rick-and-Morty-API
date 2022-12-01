import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const url = `https://rickandmortyapi.com/api/character?page=`;

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${page}`);
      const { results } = await response.json();
      if (results) {
        const newResults = results.map((item) => {
          const { id, name, image, origin } = item;

          const newItem = {
            id,
            name,
            image,
            origin,
          };

          return newItem;
        });
        setCharacters(newResults);
      } else {
        setCharacters([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  const increase = () => {
    setPage((page) => {
      let newPage = page + 1;
      if (newPage >= 43) {
        return 1;
      } else {
        return newPage;
      }
    });
  };

  return (
    <AppContext.Provider value={{ loading, characters, page, increase }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
