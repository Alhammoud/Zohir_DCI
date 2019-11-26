import React, { Component } from 'react'
import './App.css';

export default class Main extends Component {
    /* state ={
        color: ''
    } */

    constructor(props){
        super(props);
        
        /* this.state.useful=true; */
        this.state={
            color: ''
        }
       
    }


    componentDidMount(){

         setInterval( 
    
          () => {
    
            function getRandomColor() {
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
            } 
    
           
            
          this.setState({
            color:getRandomColor()
               });    
          },// end callback function
          2000
        );
    
      }

    render() {
        return (
            <div className="mainCom" style={{backgroundColor:this.state.color}}>
                Main
            </div>
        )
    }
}
