import React, { Component } from 'react';

import D from './D'


export class C extends Component {

    lastReceivedRandomNumber = 0;
    randomNumberOf_C = 0;
    product = 0;


    shouldComponentUpdate(nextProps, nextState){

        /* 
        Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
         */


         /* if((nextProps.randomNumber !== this.lastReceivedRandomNumber) || this.lastReceivedRandomNumber === -1){

            
          }
           */
        this.lastReceivedRandomNumber = nextProps.randomNumber;
        this.randomNumberOf_C = Math.floor(Math.random()*10);
        this.product = this.randomNumberOf_C * this.lastReceivedRandomNumber;
        return true;
    }

    render() {
        return (
            <div>

                Hallo From  C Component .. <br/>
                <br/>

                c =  this.lastReceivedRandomNumber  x  this.randomNumberOf_C  =  this.product <br/>
                c = {this.lastReceivedRandomNumber} x {this.randomNumberOf_C} = {this.product}
                <br/>
                <br/>


                Instantiate D inside of  C Component: <br/>
                <D  randomNumber={this.product} f_from_c_as_props={this.props.f_from_APP}/>
                <br/>
                <br/>
                <br/>
                
            </div>
        );
    }
}

export default C;
