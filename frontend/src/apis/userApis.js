import { axiosInstance } from "../utils/axiosInstance"

export const getUserUrls = async() => {
    try {
        const data = await axiosInstance.get("/api/user/getAllUrls");
        return data.data.urls;
    } catch (error) {
        console.error(error, "getUserUrls");
        return null;
    }
}