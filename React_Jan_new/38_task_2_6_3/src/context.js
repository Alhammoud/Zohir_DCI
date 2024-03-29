import React, {Component } from 'react';

export const MyContext = React.createContext();


const reducer = (state , action) => {

    switch (action.type) {
        
        case 'INCERMENT_X':
            return{
                ...state,
                x: state.x +1
            }
        case 'DECERMENT_Y':
            return{
                ...state,
                y: state.y -1
            }
        default:
            return state;
    }

}

export class MyProvider extends Component{

 
   state = {
        x: 0,
        y: 0,
        dispatch: (action) => {
            // 2, from von setState erwartet als parameter eine funktion 
            // diese funktion wird vom react mit dem parameter previousState aufgerufen
            this.setState( state => reducer(state, action))
        }
    } 
 
    render(){

        
        return(

            <MyContext.Provider value={this.state}>

                {this.props.children}

            </MyContext.Provider>
        )
    }
}