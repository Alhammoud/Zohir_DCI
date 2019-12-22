import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postComment } from './actions';


class NewComment extends Component {


  state = {
    text: "",
    textPlaceholder:"    new comment",
    name: "",
    namePlaceholder:"    your name"
}


    nameInput = (e) => {
      console.log('e in nameInput(e) ');
      console.log(e);
      this.setState({
          name: e, 
      })
    }

    textInput = (e) => {
      console.log('e in textInput(e) ');
      console.log(e);
      this.setState({
          text: e,

      })
    }

    sendingAway = () => {
        
      if (this.state.text === "") {
          this.setState({textPlaceholder:"your comment is required"})
          return
      } else if (this.state.name === "") {
          this.setState({namePlaceholder:"your name is required"})
          return
      }


      this.props.postComment({
          name: this.state.name, 
          text:this.state.text
      });

      this.setState({
          name:"",
          nameValue:"",
          namePlaceholder:"    your name",
          text:"",
          textValue:"",
          textPlaceholder:"    new comment"
      })
  }
    render() {
        return (
        <div className='header'>
          <div className='title'><h2>New Comment </h2></div>
          <div className='search_div'>
            <input type="text" onChange={(e) => this.textInput(e.target.value)} placeholder={this.state.textPlaceholder} ></input>
            <input type="text" onChange={(e) => this.nameInput(e.target.value)} placeholder={this.state.namePlaceholder} ></input>
            <button className='create_comment' onClick={()=>this.sendingAway()}>Create comment</button> 
          </div>
        </div>
        );
    }
}

/* const mapStatetoProps = (state) => ({
    users: state.users
}) */

export default connect(/* mapStatetoProps */ null,{postComment})(NewComment);
