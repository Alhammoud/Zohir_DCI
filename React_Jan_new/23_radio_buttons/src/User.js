import React from 'react'

export default function User(props) {
    
    
    return (
        <div>
           {props.name} <button onClick={() => props.deleteHandler(props.id)}>Remove</button>
        </div>
    )
}
