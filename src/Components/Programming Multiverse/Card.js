import React from "react";

const Card = ({ name, year, names, cases }) => {
  return (
    <div className=" hover:translate-y-2 transition-all rounded-xl bg-gray-100 border-gray-200 shadow-md border w-max p-5">
      <h2 className="text-blue-500 font-bold mb-2">{name}</h2>
      <p>Year of Start: {year}</p>
      <p>Creator: {names}</p>
      <p>Use Case: {cases}</p>
    </div>
  );
};

export default Card;
