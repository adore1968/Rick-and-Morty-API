import React from "react";
import { useGlobalContext } from "./context/AppContext";
import CharactersList from "./components/CharactersList";

function App() {
  const { page, increase } = useGlobalContext();
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <section className="p-5 sm:p-8 ">
        <h1 className="text-center text-2xl sm:text-4xl font-bold mb-5">
          Rick and Morty
        </h1>
        <div className="flex justify-center">
          <div className="container">
            <div className="flex justify-between mb-5">
              <h2 className="text-xl sm:text-2xl">Page: {page}</h2>
              <button
                onClick={() => increase()}
                className="bg-pink-500 py-1 px-4 rounded inline-block text-lg sm:text-xl"
              >
                Go to page: {page >= 42 ? "1" : `${page + 1}`}
              </button>
            </div>
            <CharactersList />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
