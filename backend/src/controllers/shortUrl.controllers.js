import { createShortUrlWithoutUser } from "../services/createShortUrl.service.js";

export const createShortUrl = async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const shortUrl = await createShortUrlWithoutUser(url);
    res.status(200).json({ message: 'URL received', url, shortUrl });
}