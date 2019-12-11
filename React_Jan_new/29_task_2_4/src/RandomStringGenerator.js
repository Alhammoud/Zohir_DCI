import React, { Component } from 'react';
import randomstring from 'randomstring';

export default class RandomStringGenerator extends Component {

    state={
        randomString:'',
        stringLength: 0
    }
generateRandomSting = (n) => {
    if(n){
        return randomstring.generate(n)
    }
    return '';
}

componentDidMount(){
    this.setState({
        randomString: this.generateRandomSting(this.props.stringLength)
    })
}

componentDidUpdate(prevProps,prevState){
    console.log(`Update..`);
    console.log('nextProps',JSON.stringify(prevProps));
    console.log('prevState',JSON.stringify(prevState));

   this.setState({
       randomString: this.generateRandomSting(this.props.stringLength),
       stringLength: this.props.stringLength
   })
}

shouldComponentUpdate(nextProps,prevState){
    if(nextProps.stringLength !== prevState.stringLength){

        return true;
    }
    return false;

} 
    render() {
       
        return (
            <div>
               
                <h1> RandomStringGenerator Component ... </h1>
                this.props.stringLength = {this.props.stringLength} {<br/>}{<br/>}
                this.state.randomString.length = {this.state.randomString.length }{<br/>}{<br/>}
                this.state.randomString = {this.state.randomString } 


            </div>
        )
    }
}
