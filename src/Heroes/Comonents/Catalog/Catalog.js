import React, { Component } from 'react';
import './Catalog.css';
import { Link } from 'react-router-dom';
import HeroInfo from './HeroInfo';

class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            currentHero: null
        };
    }
    componentDidMount() {
        fetch("https://api.opendota.com/api/heroStats")
            .then(res => res.json())
            .then(data => this.setState({ data })
            )
    }

    viewHeroInfo = (id) => {
        const filteredHero = this.state.data.filter(data => data.id == id)
        const newCurrentHero = filteredHero.length > 0 ? filteredHero[0] : null;
        this.setState({ currentHero: newCurrentHero })
    }

    closeHeroInfo = () => {
        this.setState({ currentHero: null })
    }

    render() {
        const { data } = this.state;
        const dotaHeroesList = data.map(item =>
            <li key={item.id}>
                <Link to={`/catalog/${item.localized_name}`}>
                    <img src={`https://api.opendota.com${item.icon}`} alt="" />
                    <p onClick={() => this.props.viewHeroInfo(props.id)}>{item.localized_name} ---> Click, for more details about -- <em>{item.localized_name}</em></p>
                </Link>
            </li>
        )
        console.log(data);

        return (
            <div className="catalogList">
                <div className="container">
                    {this.state.currentHero == null ?
                        <div className="heroesItems">
                            <ul>
                                {dotaHeroesList}
                            </ul>
                        </div>
                        :
                        <HeroInfo currentHero={this.state.currentHero} closeHeroInfo={this.closeHeroInfo} />
                    }
                </div>
            </div>
        )
    }
}
export default Catalog;
