import React, { Component } from 'react'
import { MyContext } from './context'
import './App.css';


export default class E extends Component {
    render() {
        return (
            
            <MyContext.Consumer>
                {
                    (context) => (

                        <div className='divE'>
                            Hallo From E.js : <br/>  <br/>
                            <button onClick={ () => context.dispatch({type: 'DECERMENT_Y'})}>Button From E.js decrement Y</button> <br/>
                        </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
