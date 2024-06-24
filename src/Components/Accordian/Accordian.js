import React, { useState } from "react";
import "../../App.css";
import Data from "./AccordianData.json";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const Accordian = () => {
  const [allowMultiple, setAllowMultiple] = useState(true);
  const [openSections, setOpenSections] = useState({});

  const handleToggle = () => {
    setAllowMultiple(!allowMultiple);
    if (!allowMultiple) {
      setOpenSections({});
    }
  };

  const handleAccordionClick = (index) => {
    if (allowMultiple) {
      setOpenSections((prevOpenSections) => ({
        ...prevOpenSections,
        [index]: !prevOpenSections[index],
      }));
    } else {
      setOpenSections({
        [index]: !openSections[index],
      });
    }
  };

  return (
    <div>
      <div className="my-5 font-semibold text-center">
        <label>
          Is multiple open accordian allowed ?
          <input
            type="checkbox"
            checked={allowMultiple}
            onChange={handleToggle}
          />
        </label>
      </div>
      <div className="accordion">
        {Data.map((item, index) => (
          <div
            key={index}
            className="accordion-item border border-[#d3d3d3] mx-20 py-2 text-left"
          >
            <div
              className="flex items-center justify-between accordion-header"
              onClick={() => handleAccordionClick(index)}
            >
              <p className="font-semibold">{item.title}</p>
              <div className="text-3xl">
                {openSections[index] ? (
                  <FaCircleMinus fill="#d3d3d3" />
                ) : (
                  <FaCirclePlus fill="#d3d3d3" />
                )}
              </div>
            </div>
            {openSections[index] && (
              <div className="p-2 text-black accordion-body text-[14px]">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
