import React, {
  Component
} from 'react';
import './App.css';

import Test from './Test'

class App extends Component {


  state={
    x:0,
    showTest: true
  }

  incrementX = () =>{
    this.setState({
      x: this.state.x +1
    })
  }

  toggeleTest= ()=>{
    this.setState({
      showTest: !this.state.showTest
    })
  }


  render() {
    return (
      <div>
       Hallo World APP ..!
       <h1>Lifecycle of Test Component </h1>
       {/* <Test x={this.state.x} /> */}

       {this.state.showTest && <Test  x={this.state.x} />}
       <br/><br/><br/>
       <button onClick={this.toggeleTest}> Show / Unshow Test </button>
       <br/><br/><br/>

       x= {this.state.x} <br/><br/><br/>
       <button onClick={this.incrementX}> Increment X </button>

      </div>
    );
  }
}

export default App;