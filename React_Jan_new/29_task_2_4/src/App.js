import React, {
  Component
} from 'react';
import './App.css';

import RandomStringGenerator from './RandomStringGenerator'

class App extends Component {

  state = {
    randomStringLengths: []
  }
 
  
  generateRandomStringLengths = () =>{
    
    const newRandomStringLength = [];
    
    for(let i=0; i<3; i++){
      newRandomStringLength.push( 4 + Math.floor(Math.random()*3) )
    }
    console.log('newRandomStringLength');
    console.log(newRandomStringLength);
    
    this.setState({
      randomStringLengths: newRandomStringLength
    })
  }
  
  
  componentDidMount() {
    this.generateRandomStringLengths();
  }

  render() {
    return (
      <div>
       Hallo World APP ..!
       <br/><br/><br/>

        this.state.randomStringLengths : {this.state.randomStringLengths}
       <br/><br/><br/>
       <button onClick={this.generateRandomStringLengths}> Generate New Random String Lengths </button>
       <br/><br/><br/>

        {this.state.randomStringLengths && this.state.randomStringLengths.map(
          (rsl, index) =>  <RandomStringGenerator key={index} stringLength={rsl}/>
        )}


      </div>
    );
  }
}

export default App;