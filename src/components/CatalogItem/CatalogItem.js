import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSingleItem } from '../ARedux/actions/itemActions';
import './CatalogItem.css';

class CatalogItem extends Component {

   componentDidMount() {
      this.props.fetchSingleItem(this.props.match.params.name);
   }

   render() {
      return (
         <div className="catalog-items">
            <div className="container">
               <div className="team-single">
                  <div className="main-info">
                     <span>For other teams, go back to --> </span>
                     <Link to="/catalog/">
                        <button className="btn btn-dark">Catalog</button>
                     </Link>
                     <hr />
                     <p>This dota2 team name is: <strong>{this.props.item.name}</strong></p>
                     <p>Short tag name: <strong>{this.props.item.tag}</strong></p>
                     <p><strong>{this.props.item.name}</strong> team id: <strong>{this.props.item.team_id}</strong></p>
                     <p><strong>{this.props.item.name}</strong> current rating: <strong>{this.props.item.rating}</strong></p>
                     <p><strong>{this.props.item.name}</strong> wins: <strong>{this.props.item.wins}</strong></p>
                     <p><strong>{this.props.item.name}</strong> losses: <strong>{this.props.item.losses}</strong></p>
                     <p><strong>{this.props.item.name}</strong> last match: <strong> {this.props.item.last_match_time}</strong></p>
                  </div>
                  <div>
                     <img src={this.props.item.logo_url} alt="" />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
const mapStateToProps = state => ({
   item: state.items.item
})

export default connect(mapStateToProps, { fetchSingleItem })(CatalogItem);