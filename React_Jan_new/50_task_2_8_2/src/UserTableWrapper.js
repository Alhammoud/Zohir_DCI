import React from 'react';
const UserTableWrapper = (wrappedComponent) => {
    return (args) => {


       return (args.loading ? <div>loading.........!</div> : wrappedComponent({users: args.users}) );

        // if(args.loading){
        //     return <div>loading.........!</div>
        // }else{

        //     return wrappedComponent({
        //          users: args.users 
        //        /*  ...args */
        //     });
        // }
 }
}

export default UserTableWrapper;