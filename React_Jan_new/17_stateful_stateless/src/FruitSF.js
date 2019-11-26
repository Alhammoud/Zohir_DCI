import React, { Component } from 'react'

class FruitSF extends Component {

    state ={
  color: ''
    }
  
    constructor(props){
        super(props);
        /*  Line 6:5:  Useless constructor  no-useless-constructor */
        /* this.state.useful = true; */
        /* this.state={
            color: ''
        } */
        
    }
    changeColor=()=>{
        const colors =['red', 'blue','green','yellowgreen','cornflowerblue'];
        this.setState({
            color : colors[ Math.floor(Math.random() * colors.length) ]
        })
    };

    render() {
        return (
            <div style={{backgroundColor:this.state.color}}>
                Ich bin eine Frucht {this.props.type} !
                <button onClick={this.changeColor}> Change Background Color</button>
            </div>
        )
    }
}

export default FruitSF;