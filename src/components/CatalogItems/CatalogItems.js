import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatalogItems.css';
import { setSortedItems } from '../ARedux/actions/itemActions';
import { connect } from 'react-redux';

class CatalogItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sortBy = (e) => {
            e.preventDefault();
            const el = e.target.value;
            const mapped = this.props.currentItems.map(i => i);
            const sorted = mapped.sort((a, b) => a[el] - b[el]);
            this.props.setSortedItems(sorted);
        }

        return (
            <div className="catalog-items">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <button
                                    type="button"
                                    value="team_id"
                                    onClick={sortBy}
                                    className="btn btn-primary">
                                    ID
                                </button>
                            </th>
                            <th>Team Long Name</th>
                            <th>
                                <button
                                    type="button"
                                    value="rating"
                                    onClick={sortBy}
                                    className="btn btn-info">
                                    Rating
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    value="wins"
                                    onClick={sortBy}
                                    className="btn btn-success">
                                    Wins
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    value="losses"
                                    onClick={sortBy}
                                    className="btn btn-danger ">
                                    Losses
                                </button>
                            </th>
                            <th> Short Tag</th>
                        </tr>
                        {this.props.items.map(item => (
                            <tr key={item.team_id}>
                                <td><Link to={`/catalog/${item.team_id}`}>{item.team_id}</Link></td>
                                <td><Link to={`/catalog/${item.team_id}`}>{item.name}</Link></td>
                                <td>{item.rating}</td>
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                                <td><Link to={`/catalog/${item.team_id}`}>{item.tag}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items.items
})

export default connect(mapStateToProps, { setSortedItems })(CatalogItems);