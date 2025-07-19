import { getUrlById } from "../dao/saveShortUrl.dao.js";
import { createShortUrlWithoutUser } from "../services/createShortUrl.service.js";

export const createShortUrl = async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const shortUrl = await createShortUrlWithoutUser(url);
    res.status(200).json({ message: 'URL received', url, shortUrl });
}

export const redirectToLongUrl = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Short URL ID is required' });
    }
    try {
        const url = await getUrlById(id);
        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }
        res.redirect(url.full_url);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}