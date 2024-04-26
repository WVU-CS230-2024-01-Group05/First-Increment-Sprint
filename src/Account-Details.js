import {Authenticator,AccountSettings} from "./@aws-amplify/ui-react"

    export const fetchUserAttributes = async () => {
        try {
            const currentUser = await Authenticator.currentAuthenticatedUser();
            return currentUser.attributes;
        } catch (error) {
            console.error('Error fetching user attributes:', error);
            return null;
        }
    };
export default fetchUserAttributes;