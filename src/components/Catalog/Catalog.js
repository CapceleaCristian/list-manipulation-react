import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatalogItems from '../CatalogItems/CatalogItems';
import Pagination from '../Pagination/Pagination';
import './Catalog.css';

const Catalog = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const res = await axios.get('https://api.opendota.com/api/teams');
            setItems(res.data);
            setLoading(false);
        }
        fetchItems();
    }, []);

    //Get current items
    const firstIndex = lastIndex - itemsPerPage;
    const lastIndex = currentPage * itemsPerPage;
    const currentItems = items.slice(firstIndex, lastIndex);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="catalog-list">
            <div className="container">
                <h1 className="catalog-title">This Catalog contains all dota2 professional teams: <span>({items.length})</span> </h1>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={items.length}
                    paginate={paginate}
                />
                <CatalogItems
                    items={currentItems}
                    loading={loading}
                />
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={items.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}
export default Catalog;