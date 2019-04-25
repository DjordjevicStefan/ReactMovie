import React from "react";
import _ from "lodash";
import PropTypes from "prop-types" ;

const Pagination = props => {
  const { itemsCount, pageSize, curentPage, onPageChange } = props;

  const pagesCount = itemsCount / pageSize;
  if (pagesCount <= 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={page == curentPage ? "page-item active" : "page-item"}>
            <a style ={{cursor : "pointer"}}
              active="true"
              onClick={() => onPageChange(page)}
              className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired, pageSize : PropTypes.number.isRequired , 
  curentPage :PropTypes.number.isRequired, onPageChange : PropTypes.func.isRequired
}

export default Pagination;
