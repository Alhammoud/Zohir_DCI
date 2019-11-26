import React, { Component } from 'react';
import './App.css';

class App extends Component {

  colors = [
    'green',
    'red',
    'yellow',
    'orange',
    'blue',
    'cornflowerblue',
    'fuchsia',
    'lime',
    'purple',
    'gray',
    'olive'
  ];

  lastInsertId = 6;

  state = {
    fruits: [
      { name: 'apple', color: 'green', id: 1 },
      { name: 'apple', color: 'red', id: 2 }, 
      { name: 'pineapple', color: 'green', id: 3 },
      { name: 'lemon', color: 'yellow', id: 4 },
      { name: 'orange', color: 'orange', id: 5 },
      { name: 'mango', color: 'orange', id: 6 },
    ],
    newFruitName: ''
  }

  onChangeTextHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addFruit = () => {
    // ist input box leer?
    if(this.state.newFruitName === '') {
      alert('Bitte Fruchtnamen angeben.');
      return;
    }

    // wir erzeugen kopie des fruits-arrays aus dem state
    const newFruits = [...this.state.fruits];
    this.lastInsertId++;

    newFruits.unshift({
      name: this.state.newFruitName,
      color: this.colors[ Math.floor(Math.random() * this.colors.length) ],
      id: this.lastInsertId
    });
    
    this.setState({
      fruits: newFruits,
      newFruitName: ''
    });
  }

  remove = (id) => {
    console.log(id);

    // let newData = this.state.fruits.slice() //copy array from prevState

    // newData.splice(id, 1) // remove element

    const newFruits = [...this.state.fruits];

    let newData = newFruits.filter(

      /* filter() : Returns the elements of an array that meet the condition specified in a callback function. */
      fruit => fruit.id !== id 

       
     /* Expected to return a value at the end of arrow function  array-callback-return */
     /* (fruit)=>{
      if(fruit.id!==id){
       return fruit;
      }  } */


   );

   // newData.splice(id,1);

    this.setState({

      fruits:newData
      
    });
  }

  changecolor(id){
    console.log(id);
    const index = this.state.fruits.findIndex( (fruit) => fruit.id === id );
    const newFruits = [...this.state.fruits];

    newFruits[index].color = this.colors[Math.floor( Math.random() * this.colors.length )];

    this.setState({
      fruits: newFruits
    })
    
  }
  render() {
    return (
      <div>
        <h2>Some nice fruits</h2>
        <input type="text" name="newFruitName" onChange={this.onChangeTextHandler} placeholder="New Fruit here" value={this.state.newFruitName} />
        <button onClick={this.addFruit}>Add Fruit</button>
        <table>
          <thead>
            <tr>
              <td>Type</td>
              <td>Color</td>
            </tr>
          </thead>
          <tbody>
          {
            this.state.fruits.map((fruit) => <tr key={fruit.id} style={{ backgroundColor: fruit.color }}>
              <td>{fruit.name}</td>
              <td>{fruit.color}</td>
              <td><button onClick={() => this.remove(fruit.id)}>Remove{/* <td><button onClick={() => }>Show Id</button></td> */} {/* mit bind methode soll ich machen ??? */}</button></td>
              <td><button onClick={() => this.changecolor(fruit.id)}>change color</button></td>
            </tr>)
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;