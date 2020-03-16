import React, { Component } from 'react';
import { connect } from 'react-redux';

class C extends Component {
    render() {
        return (
            <div>
                Hallo Form C .. <br/> <br/>
                
                {/* {JSON.stringify(this.props.users)} */} <br/> <br/><br/>

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
                        this.props.users.map((user) => <tr key={user.id} >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                       
                        </tr>)
                    }
                    </tbody>
                </table>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});


export default connect(mapStateToProps, null)(C); 