import React, { Component } from 'react'

class Test extends Component {

    state ={}

    constructor(props) {
        super(props);
        console.log(`
        calling constructor with props from Test.js = ${JSON.stringify(props)}
        `)
    }

    static getDerivedStateFromProps(nextProps,prevState) {
        console.log(`
             calling getDerivedStateFromProps with nextProps = ${JSON.stringify(nextProps)}
             prevState = ${JSON.stringify((prevState))}
        `);
        return {
            derivedX: nextProps.x * 10
        }
    }

    shouldComponentUpdate(nextProps,prevState) {
        console.log(`
            calling shouldComponentUpdate from Test.js
        `)
        if(nextProps.x%2 === 0) {
            console.log(`
            x ist teilbar durch 5, nicht updaten
            `)
            return false
        }
        return true
    }

    componentDidMount() {
        console.log(`
            calling ComponentDidMount from Test.js
        `)
    }

    componentDidUpdate() {
        console.log(`
            calling ComponentDidUpdate
        `)
    }

    componentWillUnmount() {
        console.log(`
            calling ComponentWillUnmount
        `)
    }

    render() {

        console.log(`
        calling render`)

        return (

            <div className="test">
                <h2>Test Component</h2>
                <div>
                abgefragt = {this.props.y} <br />
                x = {this.props.x} <br />
                    derivedX = {this.state.derivedX}
                </div>
            </div>
        )
    }
}
export default Test