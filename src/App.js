import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Shared/Navigation/Navigation';
import Home from './components/Shared/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Team from './components/Shared/Team/Team';
import Contacts from './components/Shared/Contacts/Contacts';
import Error from './components/Shared/Error/Error';
import CountryItem from './components/CatalogItem/CatalogItem';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/catalog" component={Catalog} exact />
                        <Route path="/catalog/:name" component={CountryItem} exact />
                        <Route path="/team" component={Team} exact />
                        <Route path="/contacts" component={Contacts} exact />
                        <Route component={Error} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
