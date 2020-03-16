import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {

  state1 ={
    users: []
  }

  state2 ={
    users: []
  }

 async componentDidMount(){
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/users`);

      const obj = await result.json();

      console.log('obj');
      console.log(obj);

      this.setState({
        users: obj
      })
    }
    catch(e){
      console.log(e)
    }
  }

  render() {
    return (
      <div>
       Hallo World ...!
      </div>
    );
  }
}

export default App;