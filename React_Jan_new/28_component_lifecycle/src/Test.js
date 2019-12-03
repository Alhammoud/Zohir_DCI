import React, { Component } from 'react'

export default class Test extends Component {

    /* `Test` uses `getDerivedStateFromProps` but its initial state is undefined. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `Test`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape. */

    state={}


 constructor(props){
    super(props);

    console.log(`
        calling constructor from Text Component with 
        props = ${JSON.stringify(props)}
    `)
}


 static getDerivedStateFromProps(
    nextProps, // props, dei gesendet werden an Test-compnent
    prevState  // prevState , state nach dem letzten Render
    ) {
        console.log(`
        calling getDerivedStateFromProps() with
        nextProps = ${JSON.stringify(nextProps)}
        prevState = ${JSON.stringify(prevState)}
        `);
        
    /*  Test.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.*/

    /* return{

        ...prevState
    } */

    return{
        
        derivedx: nextProps.x * 10
    };
}

    shouldComponentUpdate(nextProps,prevState){

        console.log(`
        calling shouldComponentUpdate() with
        nextProps = ${JSON.stringify(nextProps)}
        prevState = ${JSON.stringify(prevState)}
        `);
        

        /* if(nextProps.x %5 === 0){ */
        if(nextProps.x > 5){
            console.log(`
        x ist teilbar durch 5, nicht updaten
        `);

            return false;

        }

        return true;
    }

    componentDidMount(){
        console.log(`
        calling componentDidMount() 
        `);
    }


    componentDidUpdate(){
        console.log(`
        calling componentDidUpdate() 
        `);
    }


    componentWillUnmount(){
        console.log(`
        calling componentWillUnmount() 
        `);
    }

    render() {
        console.log(`
        calling render() from Test Component 
        `);
        return (
            <div>
                <h1> Test Component ... this.props.x = {this.props.x}</h1>


                <div>
                    derivedx : {this.state.derivedx}
                </div>
            </div>
        )
    }
}
