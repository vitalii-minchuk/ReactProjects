import React, { Dispatch, SetStateAction } from "react";

interface IPagination {
  totalItems: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  productsPerPage: number;
  currentPage: number;
}

const Pagination = ({
  totalItems,
  productsPerPage,
  currentPage,
  setCurrentPage,
}: IPagination) => {
  let buttons = [] as Array<number>;

  for (let i = 1; i <= Math.ceil(totalItems / productsPerPage); i++) {
    buttons.push(i);
  }

  if (buttons.length === 1) return null;

  return (
    <div>
      {buttons?.map((button, index) => (
        <button
          className={button === currentPage ? "active" : ""}
          onClick={() => setCurrentPage(index + 1)}
          key={index}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
