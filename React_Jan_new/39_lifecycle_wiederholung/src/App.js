import React, {
  Component
} from 'react';
/* import logo from './logo.svg'; */
import './App.css';
/* import { directive } from '@babel/types'; */

class App extends Component {

state = {
  x: 0
}
  // beim instanziieren von App 
  // const app = new App();

  constructor(props){
    super(props)
    console.log(props);
    console.log('App wird Konstruiert. ');

    // this.state.x = 0
  }
  render() {
    return (
      <div>
       Hallo World ...!
      </div>
    );
  }
}

export default App;