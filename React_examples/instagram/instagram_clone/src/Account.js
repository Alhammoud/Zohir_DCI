import React from 'react'
import Imagecard from './Imagecard';
import AccountData from './AccountData';




const Account = (props) => {

    
        return (
            
            <div className='accountflex'>
                <div className='leftaccountFlex'>
                    < Imagecard url={props.acc.url}/>
                </div>
                
                <div className='rightaccountFlex' >
                    < AccountData account={props.acc}/>
                </div>
                
            </div>
        )
    
}
export default Account