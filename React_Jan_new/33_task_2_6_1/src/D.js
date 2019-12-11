import React, { Component } from 'react';

export class D extends Component {


    lastReceivedRandomNumber = -1;
    randomNumberOf_D = 0;
    product = 0;


    
    shouldComponentUpdate(nextProps, nextState){

        /* 
         (method) D.shouldComponentUpdate(nextProps: any, nextState: any): boolean
         Called to determine whether the change in props and state should trigger a re-render.
         Component always returns true. PureComponent implements a shallow comparison on props and state and returns true if any props or states have changed.
         If false is returned, Component#render, componentWillUpdate and componentDidUpdate will not be called.
        */

        if((nextProps.randomNumber !== this.lastReceivedRandomNumber) || this.lastReceivedRandomNumber === -1){

            this.lastReceivedRandomNumber = nextProps.randomNumber;
            this.randomNumberOf_D = Math.floor(Math.random()*10);
            this.product = this.randomNumberOf_D * this.lastReceivedRandomNumber;
            return true;
        }
        
        return false ;

    }

    componentDidUpdate(){
        if(this.product > 100){
            this.props.f_from_c_as_props(true);
        }else{
            this.props.f_from_c_as_props(false);
        }
    }



    render() {
        return (
            <div>
               hallo from D Component: <br/> <br/>
               D =  this.lastReceivedRandomNumber  x  this.randomNumberOf_D  =  this.product <br/>
               D = {this.lastReceivedRandomNumber} x {this.randomNumberOf_D} = {this.product}

            </div>
        );
    }
}

export default D;
