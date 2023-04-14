import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <ul className='pagination'>
        <li class="pagination__item pagination__item--prev"><i class="fa fa-angle-left" aria-hidden="true"></i><span>Back</span>
        </li>
        
        {pageNumbers.map(number => (
          <li key={number} className='pagination__item'>
            <span>
            <a onClick={() => paginate(number)} href='#' className='text-decoration-none'>
              {number}
              </a>
            </span>
          </li>
        ))}

        <li class="pagination__item pagination__item--next"><span>Next</span><i class="fa fa-angle-right" aria-hidden="true"></i>
									</li>
      </ul>
  );
};

export default Pagination;
