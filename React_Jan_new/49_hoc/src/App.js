import React,{Component} from 'react';
import './App.css';
import MyButton from './MyButton';

class App extends Component {
  render() {
    return (
      <div>
       <MyButton x={5} />
      </div>
    );
  }
}

export default App;