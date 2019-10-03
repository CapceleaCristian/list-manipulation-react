import React, { Component } from 'react';
import { connect } from 'react-redux';

import CatalogItems from '../CatalogItems/CatalogItems';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import './Catalog.css';

//Reducers ----------------------
import { fetchAllItems, searchItem, setCurrentPage } from '../ARedux/actions/itemActions';

class Catalog extends Component {

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
    const currentItems = searchedItems.slice(firstIndex, lastIndex);

    return (
      <div className="catalog-list">
        <div className="container">
          <h1 className="catalog-title">
            This Catalog contains all dota2 professional teams:
           <span> ({searchedItems.length})</span>
          </h1>
          <SearchBar />
          <Pagination
            itemsPerPage={this.props.itemsPerPage}
            totalItems={searchedItems.length}
          />
          <CatalogItems items={currentItems} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items.items,
  text: state.items.text,
  currentPage: state.items.currentPage,
  itemsPerPage: state.items.itemsPerPage,
})

export default connect(mapStateToProps, { fetchAllItems, searchItem, setCurrentPage })(Catalog);