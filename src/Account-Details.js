import { getCurrentUser } from "aws-amplify/auth";

//Seperate function to set the account attributes for the current user for account details
export const useFetchUserAttributes = () => {
    const currentUser = getCurrentUser();

    const fetchUserAttributes = async () => {
        try {
            if (currentUser) {
                return currentUser.attributes;
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error fetching user attributes:', error);
            return null;
        }
    };

    return { fetchUserAttributes };
};