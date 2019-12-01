import React from 'react'
import './App.css';

// es geht auch function B()
const Fruit = (props) => {
    return (
        <div className="fruit" style={{backgroundColor: props.background_Color}} >
            {props.type}
         
        </div>
    )
}

export default Fruit;