import React from 'react'

export default function MyButton(props) {

    const style={
        backgroundColor:'cornflowerblue',
        fontSize:'20px',
        padding:'4px'
    }

    

    return (
        <div style={style}>
            <button onClick={()=>{props.clickhandler(props.message)}}>
                {props.children}
            </button>
        </div>
    )
}
