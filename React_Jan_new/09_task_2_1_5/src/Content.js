import React, { Component } from 'react'
import Article from './Article'
import './App.css';

export default class Content extends Component {
    render() {
        return (
            <div className='content'>
                <Article></Article>
                <Article></Article>
                <Article></Article>
            </div>
        )
    }
}
