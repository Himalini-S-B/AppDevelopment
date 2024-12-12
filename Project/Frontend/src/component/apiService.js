import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const createUser = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/user`, user);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
