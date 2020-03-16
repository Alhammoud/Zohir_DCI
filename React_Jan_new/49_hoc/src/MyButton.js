import React from 'react'
import MyButtonWrapper from './MyButtonWrapper'


const MyButton = (props) => {
    return (
        <button>I am some 'Button and X = {props.x} </button>
    )
}


export  default MyButtonWrapper(MyButton);