// import React from 'react'

const MyButtonWrapper = (wrappedComponent) => {
    return (args) => {
       /*  return (
            <div>
                Keine Button da .
            </div>
        ) */

        return wrappedComponent({
            x: args.x * 2
        });
 }
}

export default MyButtonWrapper;