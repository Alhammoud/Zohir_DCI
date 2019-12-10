import React, { Component } from 'react'
import B from './B'
import D from './D'
import './App.css';


export default class A extends Component {
    render() {
        return (
            <div className='divA'>
                Hallo From A.js :<br /> <br />
                <B /> <br />
                <D /> <br />
            </div>
        )
    }
}
