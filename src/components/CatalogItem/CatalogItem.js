import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CatalogItem.css';

const CatalogItem = ({ match, isLoading }) => {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.opendota.com/api/teams/${match.params.name}`);
        const item = await fetchItem.json();
        setItem(item);
    };

    if (isLoading) {
        return <div>Is loading...</div>
    }

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
                        <p>This dota2 team name is: <strong>{item.name}</strong></p>
                        <p>Short tag name: <strong>{item.tag}</strong></p>
                        <p><strong>{item.name}</strong> team id: <strong>{item.team_id}</strong></p>
                        <p><strong>{item.name}</strong> current rating: <strong>{item.rating}</strong></p>
                        <p><strong>{item.name}</strong> wins: <strong>{item.wins}</strong></p>
                        <p><strong>{item.name}</strong> losses: <strong>{item.losses}</strong></p>
                        <p><strong>{item.name}</strong> last match: <strong> {item.last_match_time}</strong></p>
                    </div>
                    <div>
                        <img src={item.logo_url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CatalogItem;