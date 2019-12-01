import React from 'react'

export default function B(props) {
    
    console.log(`B rendered`);
    
    return (
        <div>
            Hallo from component B ( function B(props) ) <br/>
            <button onClick={props.callMeHandler}>Call callMe()</button><br/>
            <button onClick={props.callMeWithParamHandler.bind(this, 7)}>Call callMeWithParam(7) - bind</button><br/>
            <button onClick={() => props.callMeWithParamHandler(7)}>Call callMeWithParam(7) -  arrow</button>
        </div>
    )
}
