import React from 'react'






const Imagecard = (props) => {

        return (
            <div className='imagecard'>
                <div className='imageBackground'>
                    <div className='imageBackgroundinner'>
                        <img className="accountImage" src={props.url} alt=""></img>
                    </div>
                </div> 
            </div>
        )
    
}
export default Imagecard