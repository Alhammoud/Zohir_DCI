import React from 'react';
import {connect} from 'react-redux';
import { deleteComment} from './actions';

function Comment(props) {
    return (
        <div className='comment_div'>
            <div > {props.singleComment.text} </div>
            <div> {props.singleComment.name} </div>
            <div><button onClick={ () => props.deleteComment(props.index)} > X </button></div>
        </div>
    )
}

export default connect(null, {deleteComment})(Comment)