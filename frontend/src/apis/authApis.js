import { axiosInstance } from "../utils/axiosInstance";

export const loginUser = async(email, password) => {
    try {
        const data = await axiosInstance.post("/api/auth/login", {email, password});
        return data;
    } catch (error) {
        console.error("Error in loginapi: ",error);
    }
}

export const registerUser = async(name, email, password) => {
    try {
        const data = await axiosInstance.post("/api/auth/register", {name, email, password});
        return data;
    } catch (error) {
        console.error("Error in registerapi: ",error);
    }
}

export const logoutUser = async() => {
    try {
        const data = await axiosInstance.get("/api/auth/logout");
        return data;
    } catch (error) {
        console.error("Error in logoutapi: ",error);
    }
}

export const getCurrentUser = async() => {
    try {
        const data = await axiosInstance.get("/api/auth/currentuser");
        return data.data || null;
    } catch (error) {
        console.error("Error in getCurrentUser: ",error);
        return null;
    }
}