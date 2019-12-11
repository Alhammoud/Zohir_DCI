import React, { Component } from 'react'
import { MyContext } from './context'

export default class C extends Component {

    render() {
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                                /* Line 12:29:  Expected an assignment or function call and instead saw an expression  no-unused-expressions */

                                /* Module not found: You attempted to import /.context which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
                                
                                */
                            <div>
                               
                               {context.state.x} <br/>
                               <button onClick={context.incrementX}>increment X</button>
                            </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
