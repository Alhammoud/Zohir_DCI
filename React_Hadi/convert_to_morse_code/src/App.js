import React, { Component } from 'react'
import './App.css';
import morseCodes from './morseCodes'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      input: "",
      output: ""
    }
  }

  convertToMorse(input){

    let output = "";
    let morseArray = input.split("");
    console.log('morseArray');
    console.log(morseArray);

    for(let i = 0; i < morseArray.length; i++){


      output += morseCodes[morseArray[i].toUpperCase()];
      /* if(morseArray[i] === " "){
  
         output += "\xa0\xa0";
        //output += "&nbsp";
        console.log('output');
        console.log(output);
      }
      else {
        console.log('morseArray[i]');
        console.log(morseArray[i]);
        output += morseCodes[morseArray[i].toUpperCase()];
        console.log('output');
        console.log(output);
      } */
    }
    this.setState({output, input});

  }

  render() {

    return (

      <div className="container">
      
          <h1>Morse Code Translator</h1>
           {/* <div className='imageDiv'> </div>  */}
           <img className='image' alt='Morse Code' src='./mose_code.jpg' />
           <textarea className="textArea" rows="10" cols="70"
                 onChange={(e)=>this.convertToMorse(e.target.value)}>

           </textarea>
          {/* <input className="form-control"
                 onChange={(e)=>this.convertToMorse(e.target.value)}/> */}
          <h3 className="pre-line">original:<br/>
           {this.state.input}</h3>
          <h3 className="pre-line">morse: <br/>
          {this.state.output}</h3>
        
    </div>

    );

  }
}

export default App;
