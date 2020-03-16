import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from './actions'

class B2 extends Component {
/* 
    loudUsers = async () => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const obj = await result.json();

            console.log(obj);
            this.props.loadUsers(obj)
        }
        catch (e) {
            console.log(e);
        }
    }

 */

    render() {
        return (
            <div>
                B2 <br/> <br/>
                <button onClick={this.props.loadUsers}>loadUsers From B2.js Component</button>
            </div>
        )
    }
}

export default connect(null, {loadUsers})(B2); 