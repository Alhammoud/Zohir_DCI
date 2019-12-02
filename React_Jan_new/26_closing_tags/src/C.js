import React from 'react'

export default function C(props) {
    const style={
        color:'red'
    }
    return (
        <div style={style}>
            c
            {props.children}
        </div>
    )
}
