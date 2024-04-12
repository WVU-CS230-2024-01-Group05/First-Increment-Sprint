import React from 'react';
import { Link } from 'react-router-dom';

const AccountDetails = () => {
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
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
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
