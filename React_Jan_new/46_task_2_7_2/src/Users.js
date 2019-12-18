import React, { Component } from 'react';
import User from './User';

import { connect } from 'react-redux';

export class Users extends Component {

    state = {
        users: []
    }


    render() {
        return (
            <div className='users'>

            <table className='usres_table'>
                  <thead>
                      <tr>
                      <td>Id</td>
                      <td>Name</td>
                      {/* <td>UserName</td> */}
                      <td>Email</td>

                      </tr>
                  </thead>
                  <tbody>
                  {
                     this.props.users && this.props.users.map((user) => (

                        <User user={user} key={user.id} />

                    /*  <tr key={user.id} >
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td><a href=""  className="link_button" >{user.email}</a></td>
                      </tr> */

                      ))}
                  </tbody>
              </table>

        </div>
        );
    }
}

const mapStatetoPrps = (state) => ({
    users: state.users
})
export default connect(mapStatetoPrps, null)(Users);
