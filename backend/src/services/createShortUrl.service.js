import { saveShortUrl } from "../dao/saveShortUrl.dao.js";
import { generateNanoid } from "../utils/generateNanoid.utils.js";

export const createShortUrlWithoutUser = async (longUrl) => {
    const shortId= generateNanoid(7);
    await saveShortUrl(shortId, longUrl);
    return process.env.APP + shortId;
}

export const createShortUrlWithUser = async (longUrl, userId) => {  
    const shortId= generateNanoid(7);
    await saveShortUrl(shortId, longUrl, userId);
    return process.env.APP + shortId;
}