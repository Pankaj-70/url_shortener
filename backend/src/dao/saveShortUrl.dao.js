import urlSchema from "../model/shortUrlSchema.model.js";

export const saveShortUrl = async (shorturl, longUrl, userId) => {
    const existingUrl = await urlSchema.findOne({ short_url: shorturl });
    if (existingUrl) {
        return new Error('Short URL already exists'); 
    }
    const newUrl = new urlSchema({
        full_url: longUrl,
        short_url: shorturl
    });
    if(userId) {
        newUrl.user = userId;
    }
    await newUrl.save();
    return newUrl;
}   

export const getUrlById = async (id) => {
    const url = await urlSchema.findOneAndUpdate({short_url: id}, { $inc: { clicks: 1 } });
    return url;    
}

