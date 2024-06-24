import React, { useState } from "react";

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeBackground = () => {
    setBgColor(getRandomColor());
  };
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="h-[90.1vh] text-center transition-all"
    >
      <button
        onClick={changeBackground}
        className="p-2 px-4 mt-10 transition-all bg-gray-200 rounded-md shadow-md hover:scale-110"
      >
        Change Color!! 😎{" "}
      </button>
    </div>
  );
};

export default BackgroundChanger;
