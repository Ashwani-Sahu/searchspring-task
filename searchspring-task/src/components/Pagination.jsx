import React from "react";
import "./Pagination.css";

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        {"< Previous"}
      </button>
      <span>
        Page <strong>{page}</strong> of {totalPages}
      </span>
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        {"Next >"}
      </button>
    </div>
  );
};

export default Pagination;
