import React from 'react';

export default function B(props) {
    
   /*  if(props.isGreaterThan100){
        alert('The product of the three random number is greater than 100')
    }else{
        alert(`The product of the three random numbers is less or equal than 100.`)
    } */

    return (
        <div>
            <h2> Hallo From B Component  </h2>
            { props.isGreaterThan100 ? 
             'The product of the three random numbers is greater than 100.'
            :'The product of the three random numbers is less or equal 100.'}
        </div>
    )
}
