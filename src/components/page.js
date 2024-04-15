import React from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  // Function to handle clicking on a page number
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle clicking on the previous button
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle clicking on the next button
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate an array of page numbers from 1 to totalPages
  const pages = [];
  for (let i = 1; i <= totalPages && i <= 25; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={handlePreviousClick} disabled={currentPage === 1}>
        Previous
      </button>
      {/* Display page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
