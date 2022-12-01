import React from "react";

function Character({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} />
      <p>{item.origin.name}</p>
    </div>
  );
}

export default Character;
