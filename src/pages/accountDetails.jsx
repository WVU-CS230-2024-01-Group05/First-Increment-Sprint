import React, {useState, UseEffect, useEffect} from 'react';

const AccountDetails =()=>{
    /*const [userAttributes, setUserAttributes]=useState(null)
    useEffect(()=>{ 
        async function fetchDetails() {
            try{
                const user = await Auth.currentAuthenticatedUser();
                const attributes = await Auth.userAttributes(user);
                setUserAttributes(attributes);
            }catch(err){
                console.log(err)
            }
        }
        fetchDetails();
    },[]);*/

return(
    <div>
        <h1>Account Details</h1>
        <p><strong>Username:</strong></p>
        <button><Link to='/search'>Home Page</Link></button>
    </div>
)
}

export default AccountDetails;
