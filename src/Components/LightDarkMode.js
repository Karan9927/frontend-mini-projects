import React, { useState } from "react";

const LightDarkMode = () => {
  const [toggleMode, setToggleMode] = useState(false);

  const toggleHandler = () => {
    setToggleMode(!toggleMode);
  };

  return (
    <div
      className={
        toggleMode
          ? "bg-gray-800 text-white mx-20 transition-all"
          : "bg-white text-black mx-20 transition-all"
      }
    >
      <div className="px-5 pt-10 pb-3 mt-5">
        <h1 className="mb-5 text-3xl font-bold">
          Try to toggle the theme and see the change !!!
        </h1>
        <button
          onClick={toggleHandler}
          className="p-2 mt-5 text-white bg-pink-700 hover:bg-red-400"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
