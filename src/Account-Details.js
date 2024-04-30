import { getCurrentUser } from "aws-amplify/auth";

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