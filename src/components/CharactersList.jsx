import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Character from "./Character";
import Loading from "./Loading";

function CharactersList() {
  const { characters, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {characters.map((item) => {
        return <Character key={item.id} item={item} />;
      })}
    </div>
  );
}

export default CharactersList;
