import React, {
  Component
} from 'react';

import './App.css';

import B from './B'

class App extends Component {
  state={
    x:0
  }
  render() {
    return (
      <div>
       Hallo World ...!
       <B 
       someProp="Hallo world from B com" 
       someOtherProp="Halllo Sun ..!"

       x={this.state.x}
       />
          <button onClick={() =>{
            this.setState({
              x: this.state.x +1
            })
          }}> count up x</button>
      </div>
    );
  }
}

export default App;