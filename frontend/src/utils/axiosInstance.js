import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', 
});


//handle errors globally
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            console.error('API Error:', error.response.data);
        } else if (error.request) {
            console.error('No response from server:', error.request);
        } else {
            console.error('Axios error:', error.message);
        }
        return Promise.reject(error);
    }
);