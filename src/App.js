import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import CreateDetail from './components/project/CreateDetail'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/project/:id' component={CreateDetail} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
