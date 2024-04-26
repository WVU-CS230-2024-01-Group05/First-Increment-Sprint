import {useAuthenticator,AccountSettings} from "@aws-amplify/ui-react"

    export const fetchUserAttributes = async () => {
        try {
            const {currentUser} = useAuthenticator((context)=>[context.user]);
            return currentUser.attributes;
        } catch (error) {
            console.error('Error fetching user attributes:', error);
            return null;
        }
    };
export default fetchUserAttributes;