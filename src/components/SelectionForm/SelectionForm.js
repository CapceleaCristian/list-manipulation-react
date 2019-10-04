import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectionForm.css';

import { setItemsPerPage, setCurrentPage } from '../ARedux/actions/itemActions';

class SelectionForm extends Component {

   itemOnChange = (e) => {
      this.props.setItemsPerPage(e.target.value);
      this.props.setCurrentPage(1);
   }
   render() {
      return (
         <div className="selection-form">
            <div className="input-group mb-3">
               <select onChange={this.itemOnChange} className="custom-select" id="inputGroupSelect02">
                  <option value="0">Items on page...</option>
                  <option value="1000">1000</option>
                  <option value="500">500</option>
                  <option value="200">200</option>
                  <option value="100">100</option>
                  <option value="75">75</option>
                  <option value="50">50</option>
                  <option value="40">40</option>
               </select>
               <div className="input-group-append">
                  <label className="input-group-text" htmlFor="inputGroupSelect02">Items Options</label>
               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => ({
   itemsPerPage: state.items.itemsPerPage
})

export default connect(mapStateToProps, { setItemsPerPage, setCurrentPage })(SelectionForm);