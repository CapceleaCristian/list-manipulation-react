import React from 'react';
import './Catalog.css';

function HeroInfo(props) {
    return (
        <div>
            <div className="container">
                <div className="row" onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingTop: 50 }}>
                    <i className="fas fa-arrow-left"></i>
                    <span style={{ marginLeft: 10 }}>Go back</span>
                </div>
            </div>
            <div>
                <p>{props.currentHero.id}</p>
                <p>{props.currentHero.name}</p>
                <p>{props.currentHero.localized_name}</p>
                <p>{props.currentHero.roles}</p>
            </div>
        </div >
    )
}
export default HeroInfo;