import React from 'react'
import CardCard from './CardCard'

const PostsCard = (props) => {
    
        return (
            <div className='postsCard'>
                <div className='postCardlinks'>
                    <div className='postCardMenuLink'>POSTS</div>
                    <div className='postCardMenuLink'>IGTV</div>
                    <div className='postCardMenuLink'>TAGGED</div>
                </div>
                
                <div className='postsCardCards'>
                    < CardCard props={props}/>
                </div>
            </div>
        )

}
export default PostsCard