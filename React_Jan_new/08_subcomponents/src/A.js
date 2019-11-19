import React, { Component } from 'react'
/* rcc enter */

import C from './C';
import D from './D';

export default class A extends Component {
    render() {
        return (
            <div>
                hallo from Component A 
                <C> </C>
                <D> </D>
            </div>
        )
    }
}
