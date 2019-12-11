import React from 'react'

export default function C(props) {
    return (
        <div>
            C, x = {props.x} <br/>

            <button onClick={props.f_c}> Hallo World From C Component throw function in App Component </button>
        </div>
    )
}
