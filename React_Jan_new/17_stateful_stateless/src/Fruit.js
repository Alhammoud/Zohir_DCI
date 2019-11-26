import React from 'react'


function Fruit(props) {
    /* Fruit ist ein Component mit stateless */
    return (
        <div>
           {/*  Ich bin eine Frucht (Orange !) */}
           Ich bin eine Frucht {props.type} !
           {/* <Fruit type="Orange"></Fruit>
                <Fruit type="Mango"></Fruit>
                <Fruit type="Apple"></Fruit> */}
        </div>
    )
}

export default Fruit;