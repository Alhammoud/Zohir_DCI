import React, {Component} from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

 onChange = (event) => {
     console.log('**** onChange() ******');
    console.log('event');
    console.log(event);
    console.log('event.target.value');
    console.log(event.target.value);
    console.log('this');
    console.log(this);
    console.log('this.state');
    console.log(this.state);
    this.setState({term: event.target.value});
    /* after THis.setState so happend this.state.term = event.target.value  */
  }
 

  onSubmit = (event) => {
    console.log('**** onSubmit() ******');
    console.log('event');
    console.log(event);
    console.log('event.target.value');
    console.log(event.target.value);
    console.log('this');
    console.log(this);
    console.log('this.state');
    console.log(this.state);
    event.preventDefault()

    if(!(this.state.term)){
      alert(" nichts hinzufügen ..!!")
    }else{
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    }

    console.log('this.state after onSubmit');
    console.log(this.state);
  } 


  render() {
    return (
      <div>
        <h1>
          Test App
        </h1>
{/* 

      <form>
        <label htmlFor="fn">First Name : </label>
        <input type="text" id="fn"></input> <br/>
        <label htmlFor="ln"> Last  Name : </label> 
        <input type="text" id="ln"></input><br/>
        <input type="submit" value="send"></input><br/><br/><br/>
      </form> */}


      <form className="App" onSubmit={this.onSubmit}>
       <input value={this.state.term} onChange={this.onChange} />
       <button>Submit</button>
      </form>

      <List items={this.state.items} /> 

      </div>
    );
  }
} // end class App







