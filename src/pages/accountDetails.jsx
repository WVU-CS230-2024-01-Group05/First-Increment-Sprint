import React, { useState, useEffect } from 'react';
import { useFetchUserAttributes } from '../Account-Details';
import { getCurrentUser } from 'aws-amplify/auth';

const AccountDetails = () => {
    const { fetchUserAttributes } = useFetchUserAttributes();
    const [userAttributes, setUserAttributes] = useState(null);

    useEffect(() => {
        const getUserAttributes = async () => {
            try {
                const attributes = await fetchUserAttributes();
                setUserAttributes(attributes);
            } catch (error) {
                console.error('Error fetching user attributes:', error);
            }
        };

        getUserAttributes();
    }, [fetchUserAttributes]);

    async function currentAuthenticatedUser() {
    
      try {
        const { username, userId, signInDetails } = await getCurrentUser();
        console.log(`The username: ${username}`);
        console.log(`The userId: ${userId}`);
        console.log(`The signInDetails: ${signInDetails}`);
      } catch (err) {
        console.log(err);
      }
    
    }
    return (
        <div className="account-details">
            <h1>Account Details</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={userAttributes} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={userAttributes} readOnly />
                    </div>
        </div>
    );
};

export default AccountDetails;