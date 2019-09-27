import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatalogItems from '../CatalogItems/CatalogItems';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import './Catalog.css';

const Catalog = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(40);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const res = await axios.get('https://api.opendota.com/api/teams');
            setItems(res.data);
            setLoading(false);
        }
        fetchItems();
    }, []);
    const filteredItems = items.filter((item) => {
        return item.name.toLowerCase().includes(searchItem.toLowerCase());
    })
    //Get current items
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = filteredItems.slice(firstIndex, lastIndex);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Search Input
    const handleInput = (e) => {
        setSearchItem(e.target.value);
    }
    //Sorting by 
    const sortBy = (key) => {
        console.log(key);
        setItems(items.sort((a, b) => parseFloat(a[key]) < parseFloat(b[key])))
    }
    return (
        <div className="catalog-list">
            <div className="container">
                <h1 className="catalog-title">
                    This Catalog contains all dota2 professional teams:
                    <span>({filteredItems.length})</span>
                </h1>
                <SearchBar handleInput={handleInput} />
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredItems.length}
                    paginate={paginate}
                />
                <CatalogItems
                    items={currentItems}
                    loading={loading}
                    sortBy={sortBy}
                />
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredItems.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}
export default Catalog;