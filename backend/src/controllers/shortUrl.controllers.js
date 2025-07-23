import { getUrlById } from "../dao/saveShortUrl.dao.js";
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/createShortUrl.service.js";

export const createShortUrl = async (req, res) => {
    try {   
        const user = req.user || null;
        const { url, slug } = req.body;
        if(!user && slug) {
            return res.status(401).json({ error: 'User is required to create a short URL' });
        }
        let shortUrl;
        if(!user) {
            shortUrl = await createShortUrlWithoutUser(url);
        } else {
            shortUrl = await createShortUrlWithUser(slug, url, user.id);
        }
        res.status(200).json({ message: 'URL received', url, shortUrl });
    } catch (error) {
        console.error("Error creating short URL:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
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

