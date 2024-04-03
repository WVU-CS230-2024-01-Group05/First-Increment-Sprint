import React, {useState, UseEffect, useEffect} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link} from 'react-router-dom';
    
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
            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
)
}

export default AccountDetails;
