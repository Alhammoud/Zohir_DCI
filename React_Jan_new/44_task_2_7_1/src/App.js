import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {

  state ={
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


  remove = (id) => {
    console.log(id);

    const newUsers = [...this.state.users];

    let newData = newUsers.filter(

      user => user.id !== id 

   );
    this.setState({

      users:newData
      
    });
  }


  render() {
    return (
      <div>
      
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>UserName</td>
              <td>Email</td>

            </tr>
          </thead>
          <tbody>
          {
            this.state.users.map((user) => <tr key={user.id} >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td><button onClick={() => this.remove(user.id)}>X</button></td>
            </tr>)
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;