import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" class="searchButton" >
                    <i class="fa fa-search" />
                </button>
            </div>
        </div>
    )
}
export default SearchBar;