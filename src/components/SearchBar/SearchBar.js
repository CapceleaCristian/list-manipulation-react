import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchItem, setCurrentPage } from '../ARedux/actions/itemActions';
import './SearchBar.css';

class SearchBar extends Component {

   //Search event set 
   onChange = (e) => {
      this.props.searchItem(e.target.value);
      this.props.setCurrentPage(1);
   }
   render() {
      return (
         <div>
            <div className="wrap">
               <div className="search">
                  <input type="text" onChange={this.onChange} className="searchTerm" placeholder="What are you looking for?" />
                  <button type="submit" className="searchButton" >
                     <i className="fa fa-search" />
                  </button>
               </div>
            </div>
         </div>
      )
   }
}

const mapStatesToProps = (state) => ({
   text: state.items.text
})

export default connect(mapStatesToProps, { searchItem, setCurrentPage })(SearchBar);