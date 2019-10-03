import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ itemsPerPage, totalItems }) => {

   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <nav className="total-pages centered">
         <ul className="pagination">
            {pageNumbers.map(number =>
               <li key={number} className="page-item">
                  <Link to='/catalog' className="page-link">{number}</Link>
               </li>
            )}
         </ul>
      </nav >
   )
}
export default Pagination;