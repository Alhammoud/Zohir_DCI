import React, { Component } from 'react';
import './App.css';
import C from './C';
import B from './B';

class App extends Component {
  


  state = {
    randomNumberOfApp: 0,
    isGreaterThan100: false
  }



  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  


  creatRandomNumber = () => {
    this.setState({
      randomNumberOfApp: this.randomIntFromInterval(0,9)
    });
    console.log('randomNumberOfApp')
    console.log(this.state.randomNumberOfApp)
  }



  /* Error: 
  Maximum update depth exceeded. 
  This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. 
  React limits the number of nested updates to prevent infinite loops. */


  /* 
  
   This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. 
  36 | React limits the number of nested updates to prevent infinite loops.

  */
  greaterThan100Function = (isIt) =>{
    this.setState({
      isGreaterThan100: isIt
    });
  }

  render() {

      
      return (

              <>

              <header>
                <h2>App Component</h2> 
              </header>

              <div>
              randomNumberOfApp : {this.state.randomNumberOfApp} <br/><br/>

              <button onClick={this.creatRandomNumber}>Generate Random Number</button> <br/><br/>

              Instantiate C inside of App: <br/>
              {/* wir schicken randomNumberOfApp an Component C */}
              <C randomNumber={this.state.randomNumberOfApp} f_from_APP={this.greaterThan100Function}/><br/><br/><br/>

              Instantiate B inside of App: <br/>
              <B isGreaterThan100={this.state.isGreaterThan100}/><br/><br/><br/>

              </div>
              
              </>

        
        
    );
  }
}

export default App;