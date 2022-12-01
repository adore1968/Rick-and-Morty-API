import React from "react";
import { useGlobalContext } from "./context/AppContext";
import CharactersList from "./components/CharactersList";

function App() {
  const { page, increase } = useGlobalContext();
  return (
    <div>
      <section>
        <h1>Rick and Morty</h1>
        <div>
          <div>
            <h2>Page: {page}</h2>
            <button onClick={() => increase()}>
              Go to page: {page >= 42 ? "1" : `${page + 1}`}
            </button>
          </div>
          <CharactersList />
        </div>
      </section>
    </div>
  );
}

export default App;
