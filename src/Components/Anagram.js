import React, { useState } from "react";

const Anagram = () => {
  const [first, setFirst] = useState("");
  const [message, setMessage] = useState("");
  const [second, setSecond] = useState("");

  const firstHandler = (e) => {
    const text = e.target.value;
    setFirst(text);
  };
  const secondHandler = (e) => {
    const text = e.target.value;
    setSecond(text);
  };

  const checkAnagram = () => {
    const firstArray = first.split("").sort();
    console.log(firstArray);
    const secondArray = second.split("").sort();
    console.log(secondArray);
    if (firstArray.length !== secondArray.length) {
      setMessage("This word/phrases are not Anagram");
    }

    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        setMessage("This word/phrases are not Anagram");
      } else {
        setMessage("This word/phrases are Anagram");
      }
    }
  };
  return (
    <>
      <div className="flex justify-center gap-5 mt-10">
        <input
          onChange={firstHandler}
          placeholder="Enter the first word or phrase"
          className="p-1 px-2 text-sm text-black border border-black w-52"
          type="text"
        />
        <input
          onChange={secondHandler}
          placeholder="Enter the second word or phrase"
          className="p-1 px-2 text-sm text-black border border-black w-52"
          type="text"
        />
        <button
          disabled={first === "" || second === ""}
          onClick={checkAnagram}
          className="p-2 px-3 text-sm text-white bg-green-600 hover:bg-green-500"
        >
          Check Anagram
        </button>
      </div>
      <div className="my-5 text-lg font-semibold text-center">{message}</div>
    </>
  );
};

export default Anagram;
