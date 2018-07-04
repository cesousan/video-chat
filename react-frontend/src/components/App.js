import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component {

  componentDidMount() {
    console.log(this.props);
    // const parsed = queryString.parse(this.props.location.search);
    // const search = location.search;
    // console.log(search);
    // this.props.fetchUser(search);
    // console.log(parsed);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/chat" component={Dashboard} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
