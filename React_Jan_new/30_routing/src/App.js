import React, { Component } from 'react';
import './App.css';

import { Link,BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

import Start from './components/Start';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFoud';



class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <div>
                <Link to="/">Start</Link> {' | '}
                <Link to="/products">Products</Link>
              </div>
              <Switch>
                  Hallo World ...!
                  <Route exact path="/" component={Start}/>
                  <Route exact path="/products" component={Products}/>
                  <Route exact path="/productdetails/:id" component={ProductDetails}/>
                  <Route component={NotFound}/>
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;