import React from 'react'


const CardCard = (props) => {
    console.log('props')
console.log(props.props.props)
        return (
            <>
                {props.props.props.stories.map(
                    (story) => {
                        return <div key={story.id} className='cardcard'><img className='storyImg' src={story.imgurl} alt=""></img></div>
                    }
                )}
                
                
            </>
        )
    
}
export default CardCard