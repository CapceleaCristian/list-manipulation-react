import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatalogItems.css';
import { setSortedItems, setCurrentPage, setSortType } from '../ARedux/actions/itemActions';
import { connect } from 'react-redux';

class CatalogItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Sorting by number value
        const sortByNumber = (e) => {
            e.preventDefault();
            this.props.setCurrentPage(1)
            this.props.setSortType('ascending');
            const el = e.target.value;
            const mapped = this.props.items.map(i => i);
            const sorted = mapped.sort((a, b) => {
                if (this.props.sortType === 'ascending') {
                    this.props.setSortType('descending');
                    return b[el] - a[el];
                }
                else {
                    this.props.setSortType('ascending');
                    return a[el] - b[el];

                }
            });
            this.props.setSortedItems(sorted);
        }

        // Sorting by name value
        const sortByName = (e) => {
            e.preventDefault();
            this.props.setCurrentPage(1)
            this.props.setSortType('ascending');
            const el = e.target.value;
            const mapped = this.props.items.map(i => i);
            const sorted = mapped.sort((a, b) => {
                if (this.props.sortType === 'ascending') {
                    this.props.setSortType('descending');
                    return ('' + b[el]).localeCompare(a[el]);
                }
                else {
                    this.props.setSortType('ascending');
                    return ('' + a[el]).localeCompare(b[el]);

                }
            });
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
                                    onClick={sortByNumber}
                                    className="btn btn-primary">
                                    ID
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    value="name"
                                    onClick={sortByName}
                                    className="btn btn-secondary">
                                    Team Long Name
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    value="rating"
                                    onClick={sortByNumber}
                                    className="btn btn-info">
                                    Rating
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    value="losses"
                                    type="button"
                                    value="wins"
                                    onClick={sortByNumber}
                                    className="btn btn-success">
                                    Wins
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    value="losses"
                                    onClick={sortByNumber}
                                    className="btn btn-danger ">
                                    Losses
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    value="last_match_time"
                                    onClick={sortByNumber}
                                    className="btn btn-warning">
                                    Last match Played
                                </button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    value="tag"
                                    onClick={sortByName}
                                    className="btn btn-dark">
                                    Short Tag
                                </button>
                            </th>
                        </tr>
                        {this.props.slicedItems.map(item => (
                            <tr key={item.team_id}>
                                <td><Link to={`/catalog/${item.team_id}`}>{item.team_id}</Link></td>
                                <td><Link to={`/catalog/${item.team_id}`}>{item.name}</Link></td>
                                <td>{item.rating}</td>
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                                <td>{item.last_match_time}</td>
                                <td><Link to={`/catalog/${item.team_id}`}>{item.tag}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items.items,
    sortType: state.items.sortType
})

export default connect(mapStateToProps, { setSortedItems, setCurrentPage, setSortType })(CatalogItems);