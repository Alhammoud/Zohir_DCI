import React, {Component} from 'react';
import './App.css';

class App extends Component {

  componentDidMount = async() =>{
    const result = await fetch('/hallo');
    const data = await result.json();

    console.log('Messege = '+ data.message)
  }

  loadData = async() => {
    const result = await fetch('/users');
    const data = await result.json();
    console.lop(data);
  }
  saveData = async() => {

    const newUser = {
      name:'Zohir',
      email:'jan.schulz@cileria.com'
    }
    const result = await fetch('/users',{
      method: `Post`,
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    const data = await result.json();
    console.lop(data);

  }

  deleteData = async() => {
    const result = await fetch('/users',{
      method: 'DELETE'
    });
    const data = await result.json();
    console.lop(data);
  }
  render() {
    return (
      <div>
       Hallo World from App frontend <br/>
       <button onClick={this.loadData}>Load Data</button><br/>
       <button onClick={this.saveData}>Save Data</button><br/>
       <button onClick={this.deleteData}>Delete Data</button><br/>
      </div>
    );
  }
}

export default App;