import React, { Component } from 'react'
import { connect } from 'react-redux'

class C extends Component {
    render() {
        return (
            <div className='divC'>
                Hello World from C.js <br /> <br />

                <div className='x_div'>
                y = { this.props.y}   
                </div><br />  
                <button className='button' onClick={this.props.Increment_X_C} > Increment X in Component B</button>
            </div>
        )
    }
}

const mapStateTOProps = (state) => (
    {
        y: state.y
    }
)


const mapDispatchTOProps = (dispatch) =>({

    Increment_X_C : () => dispatch( { type: 'Increment_x'} )
})

export default connect(mapStateTOProps, mapDispatchTOProps)(C); // erstellt eine zweite klasse B
