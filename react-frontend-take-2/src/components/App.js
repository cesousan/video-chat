import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as actions from '../actions';
// import { history } from '../helpers';
import Header from './Header';
import Landing from './Landing';
import Chat from './chat/Chat';

class App extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route path={`/chat`} component={Chat} />
                <Route path={`/`} component={Landing} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>

      </div>
    )
  };

}

export default connect(null, actions)(App);
