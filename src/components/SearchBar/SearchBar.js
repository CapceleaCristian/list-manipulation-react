import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    console.log()
    return (
        <div>
            <div className="wrap">
                <div className="search">
                    <input type="text" onChange={props.handleInput} className="searchTerm" placeholder="What are you looking for?" />
                    <button type="submit" className="searchButton" >
                        <i className="fa fa-search" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;