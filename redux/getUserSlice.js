import axios from 'axios';

const fetchUserData = (token) => {
    // Set the Authorization header with the token
    const headers = {
        Authorization: `Bearer ${token}`
    };

    // Make the API request with the token in the header
    return axios.get('https://staging-be-ecom.techserve4u.com/api/user/verify', { headers })
        .then(response => {
            // Handle the response data
            console.log('User Data:', response.data);
            return response.data;
        })
        .catch(error => {
            // Handle any errors
            console.error('Failed to fetch user data:', error);
            throw error;
        });
};

export default fetchUserData;
