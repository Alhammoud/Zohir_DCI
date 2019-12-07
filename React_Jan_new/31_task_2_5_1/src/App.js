import React, { Component } from 'react';
import './App.css';

import { Link, BrowserRouter as Router ,Route, Switch} from 'react-router-dom';

import Start from './components/Start';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import NotFound from './components/NotFoud';
import UserAdresse from './components/UserAdresse'

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <div>
                  <Link to="/">Start</Link> {' | '}
                  <Link to="/users">Users</Link>
              </div>
              <Switch>
                  <Route exact path="/" component={Start}/>
                  <Route exact path="/users" component={Users}/>
                  <Route exact path="/userDetails/:id" component={UserDetails}/>
                  <Route exact path="/userAdresse/:id" component={UserAdresse}/>
                  <Route component={NotFound}/>
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;