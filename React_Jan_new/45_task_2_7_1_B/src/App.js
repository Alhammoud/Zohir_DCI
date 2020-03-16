import React, {
  Component
} from 'react';
import './App.css';

import User from './User'

class App extends Component {

 state={
   id: 1
 }

  render() {
    return (
      <div>
      <br/>
      User List : <br/><br/>

      <button onClick={() => this.remove()}>Next User</button><br/><br/>

      <User id={this.state.id}/>


        
      </div>
    );
  }
}

export default App;