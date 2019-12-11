import React from 'react'
import PostsCard from './PostsCard'

const Posts = (props) =>  {
    
        return (
            <div className='postsflex'>
                <PostsCard props={props}/>                
            </div>
        )
    
}
export default Posts