import React, { Component } from 'react';
import { connect } from 'react-redux';

import CatalogItems from '../CatalogItems/CatalogItems';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import SelectionForm from '../SelectionForm/SelectionForm';
import './Catalog.css';

//Reducers ----------------------
import { fetchAllItems, searchItem, setCurrentPage, resetState } from '../ARedux/actions/itemActions';

class Catalog extends Component {
  //Reseting state if changes route
  componentWillUnmount() {
    this.props.resetState();
  }
  //Fetching items
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    // Items searchbar filtering
    const searchedItems = this.props.items.filter((item) => {
      return item.name.toLowerCase().includes(this.props.text.toLowerCase());
    })

    // Get current page of items
    const lastIndex = this.props.currentPage * this.props.itemsPerPage;
    const firstIndex = lastIndex - this.props.itemsPerPage;
    const slicedItems = searchedItems.slice(firstIndex, lastIndex);

    return (
      <div className="catalog-list">
        <div className="container">
          <h1 className="catalog-title">
            This Catalog contains all dota2 professional teams: &#160;
            <span className="badge badge-secondary">{searchedItems.length}</span>
          </h1>
          <SearchBar />
          <SelectionForm />
          <div className="page-details-info">
            <span>Current page is: &#160; <span className="badge badge-primary">{this.props.currentPage}</span></span>
            <span>Items on page: &#160; <span className="badge badge-primary">{this.props.itemsPerPage}</span></span>
            <span>Sorted type is: &#160; <span className="badge badge-primary">{this.props.sortType}</span></span>
          </div>
          <Pagination
            itemsPerPage={this.props.itemsPerPage}
            slicedItems={slicedItems}
            totalItems={slicedItems.length}
          />
          <CatalogItems slicedItems={slicedItems} />
          <Pagination
            itemsPerPage={this.props.itemsPerPage}
            totalItems={searchedItems.length}
          />
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items.items,
  text: state.items.text,
  currentPage: state.items.currentPage,
  itemsPerPage: state.items.itemsPerPage,
  sortType: state.items.sortType
})

export default connect(mapStateToProps, { fetchAllItems, searchItem, setCurrentPage, resetState })(Catalog);