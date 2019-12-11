import React from 'react'

const StoryCard =(props) => {

       return (
            <div className="storyImageCard">
                <a href={props.url}>
                    <div className='storyImageCircle'>
                        <img className='storyImageImg' src={props.imgurl} alt=""></img>
                    </div> 

                    <div className='storyImageHeaderLink'>
                        <div className='storyImageHeaderLinkLeft'>{props.text}</div>
                        <div className='storyImageHeaderLinkRight'>...</div>
                        
                    </div>
                </a>
            </div>
        )
}
export default StoryCard;