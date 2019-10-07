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

  componentWillUnmount() {
    this.props.resetState();
  }
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
    console.log(this.props.itemsPerPage);
    const firstIndex = lastIndex - this.props.itemsPerPage;
    const slicedItems = searchedItems.slice(firstIndex, lastIndex);

    return (
      <div className="catalog-list">
        <div className="container">
          <h1 className="catalog-title">
            This Catalog contains all dota2 professional teams:
           <span><strong>({searchedItems.length})</strong></span>
          </h1>
          <SearchBar />
          <SelectionForm />
          <div className="page-details-info">
            <span>Current page is: <strong>{this.props.currentPage}</strong></span>
            <span>Items on page: <strong>{this.props.itemsPerPage}</strong></span>
          </div>
          <Pagination
            itemsPerPage={this.props.itemsPerPage}
            slicedItems={searchedItems}
            totalItems={searchedItems.length}
          />
          <CatalogItems currentItems={searchedItems} />
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

const mapDispatchToProps = { 
  fetchAllItems, 
  searchItem, 
  setCurrentPage, 
  resetState 
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
