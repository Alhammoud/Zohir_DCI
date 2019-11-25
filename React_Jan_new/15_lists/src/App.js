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

    // Inserts new elements at the start of an array.
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

  showId = (id) => {
    alert('clicked id: ' + id);
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
               <td><button onClick={this.showId.bind(this,fruit.id) }>{
                 /* 

                 <td><button onClick={() => this.showId(fruit.id)}>Show Id </button></td>


               (method) Function.bind(this: Function, thisArg: any, ...argArray: any[]): any

               For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.
                @param thisArg — An object to which the this keyword can refer inside the new function.
                  @param argArray — A list of arguments to be passed to the new function. */}Show Id</button></td>  
            </tr>)
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;