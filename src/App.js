import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';
import { ProvideAuth } from './use-auth';

import Home from './Home';
import Login from './Login';
import About from './About';
import Logout from './Logout';


const App = () => {
  return (
    <ProvideAuth>
        <Router>

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route  path="/home">
              <Home />
          </Route>
          <Route  path="/about">
              <About />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>

    </ProvideAuth>
  );
}

export default App;
