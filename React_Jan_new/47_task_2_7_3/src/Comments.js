import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import { getComments} from './actions';



class Comments extends Component {

  componentDidMount(){
      console.log(this.props);
      this.props.getComments();
  }
    
    render() {
        return (
        <div className='Comments'>
                {this.props.comments.map((element, index) => <Comment key={index} singleComment={element} index={index} />)}
        </div>
        );
    }
}

const mapStatetoPrps = (state) => ({
    comments: state.comments
}) 
export default connect(mapStatetoPrps, { getComments})(Comments);
