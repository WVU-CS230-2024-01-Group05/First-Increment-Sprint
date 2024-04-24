import React from 'react';
import { Link } from 'react-router-dom';
AWS.config.region = 'us-east-2'; // Replace 'your-region' with your AWS region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-2:d1beec32-22aa-4786-8510-0c2dc4d116a7" // Replace 'your-identity-pool-id' with your Cognito identity pool ID
});


const AccountDetails = () => {
    Amplify.configure({
        Auth: {
            identityPoolId: 'us-east-2:d1beec32-22aa-4786-8510-0c2dc4d116a7', // Replace 'your-identity-pool-id' with your Cognito identity pool ID
            region: 'us-east-2', // Replace 'your-region' with your AWS region
            userPoolId: 'us-east-2_YwPQShSTu', // Replace 'your-user-pool-id' with your Cognito user pool ID
            }
    });

    // Render account details component
    Amplify.UI.AccountDetails({
        container: document.getElementById('account-details')
    });
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

    return (
        <div className="account-details">
            <h1>Account Details</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Biography:</label>
                    <textarea id="description" name="description"></textarea>
                </div>
                <button type="submit" className="save-button">Save Changes</button>
            </form>
            <Link to="/" className="home-link">Home</Link>
        </div>
    );
}

export default AccountDetails;
