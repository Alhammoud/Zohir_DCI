import React from 'react'

export default function ProductDetails(props) {
    return (
        <div>
            Products Details of {props.match.params.id}
        </div>
    )
}
