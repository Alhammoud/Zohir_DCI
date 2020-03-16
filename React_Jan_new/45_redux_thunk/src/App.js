import React, {Component} from 'react';
import './App.css';
import B from './B';
import C from './C'
import B2 from './B2';
class App extends Component {
  render() {
    return (
      <div>
        <h2>Redux + Ajax</h2>
        <B/>
        <C/>
        <br />
        <br />
        <br />

        <B2/>
      </div>
    );
  }
}

export default App;