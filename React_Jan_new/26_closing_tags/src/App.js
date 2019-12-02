import React, {
  Component
} from 'react';
import './App.css';

import B from './B'
import C from './C'


class App extends Component {
  render() {
    return (
      <div>
       Hallo World ...!

       <B saywhat="Heelo world from B Component"/>

       <C>
         <h2>Hallo Sun ...from C </h2>
       </C>
      </div>
    );
  }
}

export default App;