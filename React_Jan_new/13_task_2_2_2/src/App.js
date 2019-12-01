import React, { Component } from 'react'
import './App.css';


/*                       Interpolation       */

export default class App extends Component {

  state = {
    textbox1: '', // es muss der Name von Key gleich wie  die 'Name' in DOM_element (input  name="textbox1" ) ist 
    textbox2: '',
    textbox3: '',
    textbox4: '',
    textbox5: ''
  }


  /* constructor(props) {
    super(props);

  this.state = {
    textbox1value: '',
    textbox2value: '',
    textbox3value: '',
    textbox4value: '',
    textbox5value: ''
  }
    
  } */
  
 /*  onChangeHandler1 = (e) => {
    
    this.setState({
     textbox1value: e.target.value // DOM element
    });
  } */

/* 


Try to replace the 5 handler functions with one single handler function.
Consider using Key Interpolation. (also covered in Chapter 1.8. of this
course). In case you forgot about Key Interpolation, it is accessing an
object‘s key by a string, e.g.:
const key = ‘foo‘;
const obj = {x: 1, foo: ‘hallo‘}
obj[key] = ‘hi‘; // changes foo to ‘hi‘ 

*/
  onChangeHandler = (e) => {
    //console.log(e); // es ist hier DOM-element 
    console.log(e.target);
    this.setState({
     [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="main">

        <div className="mainContiener">

          <div className="box">
            <input  className="input" type="text" name="textbox1" onChange={this.onChangeHandler} />
            <span className="span" type="text" > { this.state.textbox1 } </span>
          </div>

          <div className="box">
            <input  className="input" type="text" name="textbox2" onChange={this.onChangeHandler} />
            <span className="span"> { this.state.textbox2 } </span>
          </div>

          <div className="box">
            <input className="input" type="text" name="textbox3" onChange={this.onChangeHandler} />
            <span className="span"> { this.state.textbox3} </span>
          </div>

          <div className="box">
            <input  className="input" type="text" name="textbox4" onChange={this.onChangeHandler} />
            <span  className="span"> { this.state.textbox4 } </span>
          </div>

          <div className="box">
            <input  className="input" type="text" name="textbox5" onChange={this.onChangeHandler} />
            <span className="span"> { this.state.textbox5} </span>
          </div>

        </div>


      </div>
    )
  }
}
