import React, { Component } from 'react'
import { MyContext } from './context'
import './App.css';


export default class B extends Component {

    render() {
        return (
            <MyContext.Consumer>
                {
                    (context) => (

                        <div className='divB'>
                            Hallo From B.js : <br/> <br/>
                            <button onClick={context.incrementX}> Button from B.js increment X</button><br/> 
                        </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
