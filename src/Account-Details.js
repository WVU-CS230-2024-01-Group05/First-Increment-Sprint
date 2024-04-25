import {Auth} from "@aws-amplify/auth"

    export const fetchUserAttributes = async () => {
        try {
            const currentUser = await Auth.currentAuthenticatedUser();
            return currentUser.attributes;
        } catch (error) {
            console.error('Error fetching user attributes:', error);
            return null;
        }
    };
export default fetchUserAttributes;