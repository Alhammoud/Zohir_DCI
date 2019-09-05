import React from 'react';

class Greeting extends React.Component{

    render(){
        return <p> Welcome 2, {this.props.name}</p>
    }

}

export default Greeting;
