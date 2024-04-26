import React, { useState, useEffect } from 'react';
import { useFetchUserAttributes } from '../Account-Details';

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