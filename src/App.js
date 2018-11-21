import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path='/' component={Dashboard} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
