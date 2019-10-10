import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPage, setPrevPage, setNextPage } from '../ARedux/actions/itemActions';

class Pagination extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const pageNumbers = [];

      for (let i = 1; i <= Math.ceil(this.props.items.length / this.props.itemsPerPage); i++) {
         pageNumbers.push(i);
      }

      const changePage = (pageNumber) => {
         this.props.setCurrentPage(pageNumber)
      }
      const prevPage = (currentPage) => {
         if (currentPage <= 1) {
            this.props.setNextPage(pageNumbers.length)
         }
         else {
            this.props.setNextPage(currentPage - 1)
         }
      }
      const nextPage = (currentPage) => {
         if (currentPage > pageNumbers.length - 1) {
            this.props.setNextPage(1)
         }
         else {
            this.props.setNextPage(currentPage + 1)
         }
      }

      return (
         <nav className="total-pages centered">
            <ul className="pagination">
               <li className="page-item">
                  <Link to='/catalog' onClick={() => prevPage(this.props.currentPage)} className="page-link">Prev</Link>
               </li>
               {pageNumbers.map(pageNumber =>
                  <li key={pageNumber} className="page-item">
                     <Link to='/catalog' onClick={() => changePage(pageNumber)} className="page-link">{pageNumber}</Link>
                  </li>
               )}
               <Link to='/catalog' onClick={() => nextPage(this.props.currentPage)} className="page-link">Next</Link>
            </ul>
         </nav >
      )
   }
}


const mapStateToProps = (state) => ({
   items: state.items.items,
   currentPage: state.items.currentPage,
   itemsPerPage: state.items.itemsPerPage
});

export default connect(mapStateToProps, { setCurrentPage, setPrevPage, setNextPage })(Pagination);