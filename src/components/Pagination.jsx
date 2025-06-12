import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
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
        page : {page} of {totalPages}
      </p>
      <button className="p-2 buttons" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
