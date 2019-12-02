import React, {
  Component
} from 'react';
import './App.css';

import MyButton from './MyButton'


class App extends Component {

click=(text)=>{
  alert(text)
}


  render() {
    return (
      <div>

       Hallo World ...!
       <MyButton clickhandler={this.click} message="Hallo World">
       Hallo World 
       </MyButton>

       <MyButton clickhandler={this.click} message="Beach Life ! Me gusta!">
        <img src='beach.png' width="400" />
       </MyButton>

     

      </div>
    );
  }
}

export default App;