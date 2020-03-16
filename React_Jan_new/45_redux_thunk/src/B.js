import React, { Component } from 'react';
import { connect } from 'react-redux';


class B extends Component {

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



    render() {
        return (
            <div>
                B <br/> <br/>
                <button onClick={this.loudUsers}>loadUsers from B.js Component</button>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => ({
    loadUsers: (users) => dispatch({ type: 'LOAD_USERS' , value: users })
});

export default connect(null, mapDispatchToProps)(B); 