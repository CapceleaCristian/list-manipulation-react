import React from 'react';
import { Link } from 'react-router-dom';

const CatalogItems = ({ items, loading }) => {

    if (loading) {
        return <div>Wait a second, is loading...))</div>
    }
    return (
        <div>
            {items.map(item => (
                <div className="team-items" key={item.team_id}>
                    <Link to={`/catalog/${item.team_id}`}>
                        <div>{item.team_id}</div>
                        <div>{item.name}</div>
                        <div>{item.tag}</div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default CatalogItems;