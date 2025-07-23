import { axiosInstance } from "../utils/axiosInstance";
const createShortUrl = async (longUrl, slug) => {
    const response = await axiosInstance.post('/api/create', { url: longUrl, slug });
    return response.data.shortUrl;
};

export default createShortUrl;