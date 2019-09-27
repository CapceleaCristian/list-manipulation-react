import React from 'react';
import { Link } from 'react-router-dom';
import './CatalogItems.css';

const CatalogItems = ({ items, loading, sortBy }) => {

    if (loading) {
        return <div>Wait a second, is loading...))</div>
    }
    return (
        <div className="catalog-items">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Team Long Name</th>
                    <th><button onClick={() => sortBy('wins')}>Wins</button></th>
                    <th><button>Losses</button></th>
                    <th>Short Tag</th>
                </tr>
                {items.map(item => (
                    <tr key={item.team_id}>
                        <td><Link to={`/catalog/${item.team_id}`}>{item.team_id}</Link></td>
                        <td><Link to={`/catalog/${item.team_id}`}>{item.name}</Link></td>
                        <td>{item.wins}</td>
                        <td>{item.losses}</td>
                        <td><Link to={`/catalog/${item.team_id}`}>{item.tag}</Link></td>
                    </tr>
                ))}
            </table>

        </div>
    )
}
export default CatalogItems;