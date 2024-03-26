import React, {useState, UseEffect, useEffect} from 'react';

const AccountDetails =()=>{
    const [userDetails, setUserDetails]=useState(null)
    useEffect(()=>{ 
        const fetchDetails=async()=>{
            try{
                
            }catch(err){
                console.log(err)
            }
        }
    },[]);

return(
    <div>
        <h1>Account Details</h1>
    </div>
)
}

export default AccountDetails;
