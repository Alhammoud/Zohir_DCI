import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadusers ,searchUsers } from './actions';


class Header extends Component {

   /*  state = {
      searchTerm: ''
    } */

    componentDidMount() {
      this.props.loadusers();
    }

    /* onChange = (e) => {
      this.setState({
        searchTerm: e.target.value
      });
    } */

    /* searchUsers = (e) => {
      this.props.searchUsers(e.target.value)
    } */

    render() {
        return (
        <div className='header'>
          <div className='title'><h2>UserSearch</h2></div>
          <div className='search_div'>
            <input type="text" onChange={(e) => this.props.searchUsers(e.target.value)} placeholder="   Search.." ></input>
            {/* <button className='serachButton' onClick={this.searchUsers}>Search</button> */}
          </div>
        </div>
        );
    }
}

/* const mapStatetoProps = (state) => ({
    users: state.users
}) */

export default connect(/* mapStatetoProps */ null, { loadusers ,searchUsers})(Header);
