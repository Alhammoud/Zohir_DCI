import React, { Component } from 'react'
import { MyContext } from './context'
import './App.css';


export default class D extends Component {
    render() {
        return (
            
            <MyContext.Consumer>
                {
                    (context) => (

                        <div className='divD'>
                            Hallo From D.js :     <br/>
                            x = {context.state.x} <br/>
                            y = {context.state.y} <br/>
                            
                        </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
