import React, { useState, useEffect } from 'react';
import { fetchUserAttributes } from './Account-Details';

const AccountDetails = () => {
    const [userAttributes, setUserAttributes] = useState(null);

    useEffect(() => {
        const getUserAttributes = async () => {
            const attributes = await fetchUserAttributes();
            setUserAttributes(attributes);
        };

        getUserAttributes();
    }, []);

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
};

export default AccountDetails;