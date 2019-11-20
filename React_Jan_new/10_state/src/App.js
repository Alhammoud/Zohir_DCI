import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    greeting1: ' greeting1:  Hallo World from state from greeting ',
    numbers:[1,2,3,4,5,6]
  }

  constructor(){

    /* ReferenceError: 
    Must call super constructor in derived class 
    before accessing 'this' or returning from derived constructor */

    super(); // ruft den constructor auf der Component-Klasse
    this.state.greeting2 = ' greeting2 :  Hallo World from constructor'
  }

  // App hat fertig geladen 
  componentDidMount(){
    // nach dem Fertigladen der App ,
    // erstelle einen Timer, der nach 2 Sekunden den state updated 
    setTimeout(
      () =>{
        /* this.state.greeting1 = 'changed Hallo World'; */
        /*  Line 24:9:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state */
        this.setState({
          greeting1: 'changed Hallo World',
          greeting2:'changed greeting2',
          x : 5
        });
      },
      2000
    )

    setTimeout(
      ()=>{
        this.setState({
          // wir erstellen eine kopie des number-arrays, fügen an die kopie eine neue zahl hinzu und speichern das neue Array im neuen state.
          numbers: [...this.state.numbers,7]
        })
      },
      4000
    )
  }


  render() {

    return (
      <div>
        Hallo World ...! <br />
        {this.state.greeting1}
        <br />
        {this.state.greeting2}
        <br />
        x = {this.state.x}
        <br />
        <ul>
          {
            this.state.numbers.map(element => <li key={element.toString()}> {element} </li>)
          }
        </ul>

      </div>
    );
  }
}

export default App;