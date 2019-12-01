import React, {
  Component
} from 'react';

import './App.css';

import Fruit from './Fruit'

class App extends Component {
  
  state={
   /*  color:'red', */
    fruits: [
      {color: 'red', type: 'orange'},
      {color: 'blue', type: 'apple'},
      {color: 'orange', type: 'mango'} ]
  }

  colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  randomFruit= ['orange','apple','mango'];

  changeColor = () => {
    let newFruits=[];
    
    for (let index = 0; index < this.state.fruits.length; index++) {
      let newColor =this.colors[Math.floor(Math.random() * this.colors.length)] ;
      let newFruit=this.randomFruit[Math.floor(Math.random() * this.randomFruit.length)]

      newFruits.push({color:newColor, type:newFruit});
      
    }
        this.setState({
          /* color: colors[newColor] */
          fruits:newFruits
      });
   
}
  
  render() {


    
    return (
      <div>
        <Fruit background_Color='red' type={this.state.fruits[0].type} />
        <Fruit background_Color='green' type={this.state.fruits[1].type }/>
        <Fruit background_Color='blue' type={this.state.fruits[2].type }/>

        <Fruit  background_Color={this.state.fruits[0].color} type={this.state.fruits[0].type} />
        <Fruit  background_Color={this.state.fruits[1].color} type={this.state.fruits[1].type}/>
        <Fruit  background_Color={this.state.fruits[2].color} type={this.state.fruits[2].type} />
        <button onClick={this.changeColor}> Rendommize Apples </button>

      </div>
    );
  }
}

export default App;