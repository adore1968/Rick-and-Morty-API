import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Character from "./Character";

function CharactersList() {
  const { characters } = useGlobalContext();
  return (
    <div>
      {characters.map((item) => {
        return <Character key={item.id} item={item} />;
      })}
    </div>
  );
}

export default CharactersList;
