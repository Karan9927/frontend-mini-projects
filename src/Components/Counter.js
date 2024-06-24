import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(1);
  const increment = () => {
    setCounter(counter + number);
  };
  const decrement = () => {
    setCounter(counter - number);
  };
  const numberHandler = (e) => {
    const updatedNumber = e.target.value;
    setNumber(parseInt(updatedNumber));
    console.log(updatedNumber);
  };
  const reset = () => {
    setCounter(0);
    setNumber(1);
  };
  return (
    <div className="flex gap-5 flex-col justify-center pt-10 items-center">
      <div className="text-2xl font-bold">{counter}</div>
      <div>
        <button
          className="border px-2 p-1 mx-2 bg-gray-100 border-black"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="border px-2 p-1 mx-2 bg-gray-100 border-black"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <p>Increment/Decrement by</p>
        <input
          className="border border-black w-20 px-1 text-lg"
          type="number"
          value={number}
          onChange={numberHandler}
        />
      </div>
      <button
        className="border border-black bg-gray-200 p-1 px-3 text-lg font-semibold"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
