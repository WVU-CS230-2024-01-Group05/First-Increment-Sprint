import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify/auth';

const AccountDetails = () => {
    const [userAttributes, setUserAttributes] = useState(null);

    useEffect(() => {
        fetchUserAttributes();
    }, []);

    const fetchUserAttributes = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            setUserAttributes(currentUser.attributes);
        } catch (error) {
            console.error('Error fetching user attributes:', error);
        }
    };

    return (
        <div className="account-details">
            <h1>Account Details</h1>
            {userAttributes && (
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={userAttributes.email} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={userAttributes.name || ''} readOnly />
                    </div>
                </form>
            )}
        </div>
    );
}

export default AccountDetails;

// Uncomment and use the following code if you want to fetch user details
/*
const [userAttributes, setUserAttributes] = useState(null);
useEffect(() => {
    async function fetchDetails() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const attributes = await Auth.userAttributes(user);
            setUserAttributes(attributes);
        } catch (err) {
            console.log(err);
        }
    }
    fetchDetails();
}, []);
*/
