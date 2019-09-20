import React, { Component } from 'react';
import './Catalog.css';
import { Link } from 'react-router-dom';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch("https://api.opendota.com/api/heroStats")
            .then(res => res.json())
            .then(data => this.setState({ data })
            )
    }

    render() {
        const { data } = this.state;

        return (
            <div className="catalogList">
                <div className="container">
                    <div className="heroesItems">
                        <ul>
                            {data.map(item =>
                                <li key={item.id}>
                                    <Link to={`/catalog/${item.name}`}>
                                        <img src={`https://api.opendota.com${item.icon}`} alt="" />
                                        {item.localized_name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Catalog;
