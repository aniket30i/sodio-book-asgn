import React from "react";
import { useContext } from "react";
import BookContext from "../context/context";
import { useBookData } from "../hooks/useBookData";

const Pagination = () => {
  const { page, setPage } = useContext(BookContext);
  const { data: books = [] } = useBookData();
  const totalPages = Math.ceil(books.length / 10);

  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div className="flex justify-center gap-4">
      <button className="p-2 buttons" onClick={handleBack}>
        Back
      </button>
      <p className="text-xl text-slate-200">
        {page} of {totalPages}
      </p>
      <button className="p-2 buttons" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
