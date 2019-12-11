import React, { Component } from 'react'
import { connect } from 'react-redux'

class B extends Component {
    render() {
        return (
            <div className='divB'>
                Hello World from B.js <br /><br /> 
               <div className='x_div'>
                x = { this.props.x}    
                </div><br />              
                <button className='button' onClick={this.props.Increment_Y_B} > Increment Y in Component C</button>
            </div>
        )
    }
}

const mapStateTOProps = (state) => (
    {
        x: state.x
    }
)


const mapDispatchTOProps = (dispatch) =>({

    Increment_Y_B : () => dispatch( { type: 'Increment_Y'} )
})

export default connect(mapStateTOProps,mapDispatchTOProps)(B); // erstellt eine zweite klasse B
