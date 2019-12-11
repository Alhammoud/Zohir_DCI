import React, { Component } from 'react';
import './App.css'
import B from './B'
import C from './C'

export default class App extends Component {
  
  render() {
    return (
      <div className='divApp'>
        Hello World from App.js

        <B/>
        <C/>

      </div>
    )
  }
}
