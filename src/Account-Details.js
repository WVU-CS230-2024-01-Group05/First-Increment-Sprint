import {useAuthenticator,AccountSettings, Authenticator} from "@aws-amplify/ui-react"
import { fetchUserAttributes } from "aws-amplify/auth";

   export const useFetchUserAttributes = async () => {
    const {currentUser} = useAuthenticator();

    const fetchUserAttributes=async ()=>{
        try {
            return currentUser.attributes;
        } catch (error) {
            console.error('Error fetching user attributes:', error);
            return null;
        }
    };
    return fetchUserAttributes;
};
    export default fetchUserAttributes;