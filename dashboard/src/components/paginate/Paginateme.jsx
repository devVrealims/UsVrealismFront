import { useEffect } from "react";
import ReactPaginate from "react-paginate";

const Paginateme = ({ db, postsperpage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(db.length / postsperpage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item" style={{ padding: "3px" }}>
              <a
                className="page-link"
                onClick={(e) => {
                  e.preventDefault();
                  paginate(number);
                }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginateme;
