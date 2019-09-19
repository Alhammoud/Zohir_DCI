import React, {Component} from 'react';
import './App.css';


class Toggle extends React.Component {

  constructor() {

    //super(); when there is no super Methode -> come error
      /* 
        ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor 
        */

     super();

    this.state = {isToggleOn: true};

   // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

    render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
export default Toggle;
