import React, { Component } from 'react'
import { MyContext } from './context'

export default class C extends Component {

    render() {
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                            <div>
                               {context.x} <br/>
                               <button onClick={ () => context.dispatch({type: 'INCERMENT_X'})}>increment X</button>
                            </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
