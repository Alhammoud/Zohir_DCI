import React, {Component} from 'react';
/* import logo from './logo.svg'; */
import './App.css';
/* import { directive } from '@babel/types'; */

class App extends Component {

  render() {

    const h2Style = {
      color: 'red',
      backgroundColor: 'blue' 
    }
    
    return (
      <div>

        {/* <h2 style={{ color: 'red' ,background-color: 'blue' }}> CSS WAY ..1 </h2>  falsch*/}
        <h2 style={{ color: 'red' ,backgroundColor: 'blue' }}> CSS WAY ..1 </h2>

        <h2 style={h2Style}> CSS WAY ..2 </h2>

        <h2 className="h2Styleclass" id="bla"> CSS WAY ..3 </h2>

      </div>
    );
  }
}

export default App;