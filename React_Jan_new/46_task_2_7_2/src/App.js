import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Users from './Users'
class App extends Component {
 render() {
    return (
      <div className='app'>
        <Header/>
        <Users />
       
      </div>
    );
  }
}

export default App;