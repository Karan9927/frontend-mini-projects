import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 px-10 border-b border-gray-300">
      <div className="flex items-center justify-centerW">
        <Link to="/">
          <h1 className="flex items-center justify-center gap-2 text-lg font-semibold">
            <MdKeyboardArrowLeft fontSize={24} />
            Frontend Mini Challenges
          </h1>
        </Link>
      </div>
      <div className="text-2xl">
        <FaGithub />
      </div>
    </div>
  );
};

export default Navbar;
