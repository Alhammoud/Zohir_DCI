import React, { Component } from 'react'
import { MyContext } from './context'
import D from './D'
import E from './E'
import './App.css';


export default class C extends Component {

    render() {
        return (
            <MyContext.Consumer>
                {
                    () => (
                        <div className='divC'>
                            Hallo Form C.js : <br />
                            <D/> <br />
                            <E/> <br />
                        </div>
                    )
                  
                }
            </MyContext.Consumer>
        )
    }
}
