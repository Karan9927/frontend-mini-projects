import React, { useState } from "react";
import Data from "./PaginationData.json";
import "../../App.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(Data.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex gap-5">
        <button
          className="p-1 px-2 bg-gray-100 border border-black rounded-sm"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <button
          className="p-1 px-2 bg-gray-100 border border-black rounded-sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <table className="mt-10 border border-yellow-100 ">
        <thead>
          <tr className="text-lg bg-yellow-100">
            <th className="p-1 px-10">#</th>
            <th className="p-1 px-52">FOOD</th>
            <th className="p-1 px-10">PRICE</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.food}</td>
              <td className="text-center">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pagination;
