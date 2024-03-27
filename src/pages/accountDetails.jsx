import React, {useState, UseEffect, useEffect} from 'react';
import { currentAuthenticatedUser } from 'aws-amplify/auth';
import { UserAttributeKey } from 'aws-amplify/auth';
import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

const AccountDetails =()=>{
    const [userAttributes, setUserAttributes]=useState(null)
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
    },[]);

return(
    <div>
        <h1>Account Details</h1>
        {userAttributes && (
        <ul>
          {userAttributes.map(attribute => (
            <li key={attribute.username}>
              <strong>{attribute.username}: </strong>
              {attribute.Value}
            </li>
          ))}
        </ul>
      )}
    </div>
)
}

export default AccountDetails;
