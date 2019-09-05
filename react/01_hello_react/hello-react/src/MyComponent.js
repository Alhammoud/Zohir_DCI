import React from 'react';

import Greeting from './Greeting';

class MyComponent extends React.Component{

    constructor(props){
        super(props);
        //console.log(event.target);
        this.state={inputFieldValue:'',
                    secondValue:'',
                    thirdValue:''};
    }
    handleClick(event){
        console.log(this);
        console.log(event.target);
        //this.setState(inputFiedValue:event.target.value)
    }

    handleChange(event){
        console.log(this);

        this.refs.myParaghraph.innerText=event.target.value;

        // Ändert die Status-Variblen
        this.setState({inputFieldValue: event.target.value});
        // Danch läuft sofort this.render() los und rendert neu!

    }

    
    /* render(){
        return <button onClick={this.handleClick.bind(this)}> Halllllllo Klick mich jetzt! </button>
    } */

    render(){
        return (
            <React.Fragment>
                <input type="text" onChange={this.handleChange.bind(this)}>    
                </input>

                {/* Einfügen einer Variable, die sich ändert */}
                {<p> Welcome1, {this.state.inputFieldValue}</p>}
                
                <Greeting name={this.state.inputFieldValue}></Greeting>
                {/* Referenz zu einem HTML DOM Element statt doucument.getElementByID */}
                <p ref="myParaghraph"></p>

                <button onClick={this.handleClick.bind(this)}>
                      Halllllllo Klick mich jetzt! 
                </button>
            </React.Fragment>
       
        )
    }
}

export default MyComponent;