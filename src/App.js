import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navigation from './components/Shared/Navigation/Navigation';
import Home from './components/Shared/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Team from './components/Shared/Team/Team';
import Contacts from './components/Shared/Contacts/Contacts';
import Error from './components/Shared/Error/Error';
import CatalogItem from './components/CatalogItem/CatalogItem';
import store from './components/ARedux/store';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/catalog" component={Catalog} exact />
              <Route path="/catalog/:name" component={CatalogItem} exact />
              <Route path="/team" component={Team} exact />
              <Route path="/contacts" component={Contacts} exact />
              <Route component={Error} />
            </Switch>
          </Router>
        </div>
      </Provider>
    )
  }
}
