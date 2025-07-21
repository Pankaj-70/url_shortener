import { saveShortUrl } from "../dao/saveShortUrl.dao.js";
import { generateNanoid } from "../utils/helper.js";

export const createShortUrlWithoutUser = async (longUrl) => {
    const shortId= generateNanoid(7);
    await saveShortUrl(shortId, longUrl);
    return process.env.APP + shortId;
}

export const createShortUrlWithUser = async (slug = null, longUrl, userId) => {  
    try {
        const shortId= slug || generateNanoid(7);
        await saveShortUrl(shortId, longUrl, userId);
        return process.env.APP + shortId;
    } catch (error) {
        console.error("Error creating short URL with user:", error);
        throw error;
    }
}