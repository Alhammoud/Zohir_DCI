import React , {Component} from 'react';
import './App.css';
import Test from './Test'

class App extends Component {

/* state = {
  x: 0,
  showTest: false
} */

constructor(props){
  super(props)
  console.log(`
  calling constructor with props from App.js = ${JSON.stringify(props)}
  `)
  this.state ={
    x: 0,
    showTest: false
  }

  console.log('this.state in constructor ')
  console.log(this.state)
}


incrementX = ()=> {
  this.setState({
    x: this.state.x +1
  })
  console.log("this.state from app.js from incrementX function before finish caslled this function = ")
  console.log(this.state)
}
toggleTest = () => {
  this.setState ({
    showTest: !this.state.showTest
  })
}
componentDidMount() {
  console.log(`
      calling ComponentDidMount from App.js
  `)
}
  render (){
    console.log("this.state from app.js from render  after setState() or at the First = ")
  console.log(this.state)
    return (
      <div>
       <h2>Component Lifecyle</h2>

       {/* this.state.showTest==true */}

        {this.state.showTest && <Test y="mit Abfrage " x={this.state.x}/>}

        {/* <Test y="ohne Abfrage "x={this.state.x} />
        x = {this.state.x}  */}


        <br></br>
        <br></br>
       <button onClick={this.incrementX}>
          IncrementX
       </button>
       <br></br>
       <br></br>
       <button onClick={this.toggleTest}>
          show/unshow
       </button>
      </div>
    );
  }
}
export default App;
