import React from 'react'
import UserTableWrapper from './UserTableWrapper'


const UserTable = (props) => {
    return (
        <div>
            <table>
                  <thead>
                      <tr>
                        <td>Id</td>
                        <td>UserName</td> 
                        <td>Email</td>
                      </tr>
                  </thead>
                  <tbody>
                  {    
                   props.users && props.users.map((user) => (
                      <tr key={user.id} >
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))
                    }
                  </tbody>
              </table>
       </div>
    )
}


export  default UserTableWrapper(UserTable);