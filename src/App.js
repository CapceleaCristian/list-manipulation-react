import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Shared/Navigation/Navigation';
import './App.css';
import Home from './Shared/Home/Home';
import Catalog from './Heroes/Comonents/Catalog/Catalog';
import Team from './Shared/Team/Team';
import Contacts from './Shared/Contacts/Contacts';
import Error from './Shared/Error/Error';
import HeroDetail from './Heroes/Comonents/Catalog/HeroInfo';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/catalog" component={Catalog} exact />
                        <Route path="/catalog/:id" component={HeroDetail} />
                        <Route path="/team" component={Team} exact />
                        <Route path="/contacts" component={Contacts} exact />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


export default App;