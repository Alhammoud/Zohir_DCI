import React, { Component } from 'react';
import './App.css';
import B from './B';

class App extends Component {
  
  state = {
    x: 0
  }

  callMe = () => {
    // alert('Hallo World');
    this.setState({
      x: this.state.x + 1
    })
  } 
  
  callMeWithParam = (p) => {
    alert('p = ' + p);
  }

  render() {
    return (
      <div>
        Hallo World from class App
        <br/>
        x = {this.state.x}
        <B 
          callMeHandler={this.callMe} 
          callMeWithParamHandler={this.callMeWithParam}
          />
      </div>
    );
  }
}

export default App;