import React, { useState } from "react";

const WordCount = () => {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const [paras, setParas] = useState(0);

  const textHandler = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const countHandler = () => {
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const charCount = text.length;
    const paraCount = text.trim() ? text.trim().split(/\n+/).length : 0;

    setWords(wordCount);
    setChars(charCount);
    setParas(paraCount);
  };

  const clearHandler = () => {
    setText("");
    setWords(0);
    setChars(0);
    setParas(0);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <textarea
        onChange={textHandler}
        className="p-2 border border-gray-300 rounded-md"
        cols={80}
        rows={7}
        placeholder="Enter your text here..."
      ></textarea>
      <div className="flex justify-between w-[39em] items-center my-5">
        <p>Words: {words}</p>
        <p>Chars: {chars}</p>
        <p>Paras: {paras}</p>
        <button
          onClick={countHandler}
          className="p-1 px-3 text-white bg-black rounded-md hover:bg-gray-700"
        >
          Count
        </button>
        <button
          onClick={clearHandler}
          className="p-1 px-3 text-white bg-black rounded-md hover:bg-gray-700"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default WordCount;
