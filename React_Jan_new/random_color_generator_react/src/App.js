import React from 'react';
import './App.css';
import Color from './Color'

class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      colorsNum: 5,
      colors: []
    };
    for (let i = 0; i < this.state.colorsNum; i +=1) {
      this.state.colors.push({hexCode: this.generateColor()});
    }
  }
    
  generateColor () {
    return '#' +  Math.random().toString(16).substr(-6);
  }
  
  updateColor (index) {
    let colors = this.state.colors.slice();
    const currentColor = this.generateColor();
    colors[index].hexCode = currentColor;
    this.setState({
      colors : colors
    });
 }
  
  render () {
    return (
      <div className="color-container">
        { this.state.colors.map((color, index) => <Color key={`color-${index}`} index={index} update={this.updateColor.bind(this)} hexCode={color.hexCode}></Color>) }
      </div>
    )
  }
}

export default App;