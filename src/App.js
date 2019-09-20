import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Team from './components/Team/Team';
import Contacts from './components/Contacts/Contacts';
import Error from './components/Error/Error';
import HeroDetail from './components/Catalog/HeroDetail';

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