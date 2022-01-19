import React, { BaseSyntheticEvent } from "react";

interface IPaginationProps {
  paginate: (e: BaseSyntheticEvent, number: number) => void;
  pageNumbers: number[];
  currentPage: number;
}

/**
 * Pagination component for the PostsList component
 *
 * @param {Function} paginate Pagination function
 * @param {Array} pageNumbers Array of page numbers
 * @return {JSX.Element} JSX Code for the pagination component
 */
export default function Pagination({
  paginate,
  pageNumbers,
  currentPage,
}: IPaginationProps) {
  return (
    <>
      <h5>Pagination</h5>
      <nav>
        <ul>
          {pageNumbers.map((number: number) => (
            <li key={number}>
              <a
                className={`${currentPage === number ? "underline" : ""}`}
                onClick={(e) => paginate(e, number)}
                href="!#"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
