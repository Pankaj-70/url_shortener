import { axiosInstance } from "../utils/axiosInstance";
const createShortUrl = async (longUrl) => {
    const response = await axiosInstance.post('/api/create', { url: longUrl });
    return response.data.shortUrl;
};

export default createShortUrl;