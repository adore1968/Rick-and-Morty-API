import React from "react";

function Character({ item }) {
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <h3 className="text-xl sm:text-2xl font-semibold">{item.name}</h3>
      <img src={item.image} alt={item.name} className="my-2 rounded-full" />
      <p className="text-lg sm:text-xl">{item.origin.name}</p>
    </div>
  );
}

export default Character;
