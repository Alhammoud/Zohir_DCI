import React from 'react'


const AccountData = (props) => {
    
        return (
            <div className='accountData'>
                <div className='accountDataHeader'>
                    <div className='accountDataHeaderName'>{props.account.username}</div>
                    <div className='accountDataHeaderVerfied' style={{display: !props.account.verified && "none"}}>
                        <img className='icon' src='./img/verifyed.png' alt='verifyed'></img>
                    </div>
                    <button className='follow'>Follow</button>
                    <button className='dropdown'>
                        <div className='dropdownImg'>
                            <img className='icon2' src='./img/arrow-down.png' alt=""></img>
                        </div>
                    </button>
                    <button className='menu'>
                        <div className='menuImg'>
                            <img className='icon' src='./img/menu-dots2.png' alt=""></img>
                        </div>
                    </button>
                </div>
                <div className='accountDataCounter'>
                    <div className='counter'><span className='count'>{props.account.posts}</span>posts</div>
                    <div className='counter'><span className='count'>{props.account.follower}</span>followers</div>
                    <div className='counter'><span className='count'>{props.account.follow}</span>follow</div>
                </div>
                <div className='accountDataName'>
                    {props.account.fullname}
                </div>
                <div className='accountDataMessage'>
                    {props.account.message}
                </div>
                <div className='accountDataLink'>
                    <a href={props.account.link} >{props.account.linkname}</a>
                </div>
            </div>
        )
    
}
export default AccountData