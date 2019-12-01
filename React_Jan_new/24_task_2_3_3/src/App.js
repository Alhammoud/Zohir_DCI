import React, { Component } from 'react';
import './App.css';
import User from './User';

class App extends Component {
  
  state = {
    users: [
      {name: 'paul', id:'1', checked:true},
      {name: 'bob', id:'2' ,checked:true},
      {name: 'rebecca', id:'3' ,checked:true},
      {name: 'peter', id:'4' ,checked:true},
      {name: 'sandra', id:'5' ,checked:true}
    ]
  }

 selectRadio = (id)=>{
   const newUsers = this.state.users.map((user) => user.id !== id);

   this.setState({
     users:newUsers
   });

 }
  render() {
    return (
      <div>

        <input type='text' name='username' />

        {
        this.state.users.map((user) => <User 
        username={user.name}
        id={user.id}
        key={user.id} /> )
        }

      </div>
    );
  }
}

export default App;