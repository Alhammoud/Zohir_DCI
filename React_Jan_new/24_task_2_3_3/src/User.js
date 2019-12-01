import React from 'react'

export default function User(props) {
    
    
    return (
        <div>
            <input  
              name="radioButtons" 
              type="radio" 
             
              value={props.id}/>
              {/* <span>user name: {props.username } {'  -  '}user id: {props.id}</span> */}
              <span>{props.username } </span>
        </div>
    )
}
