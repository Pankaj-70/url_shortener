import urlSchema from "../model/shortUrlSchema.model.js";

export const saveShortUrl = async (shorturl, longUrl, userId) => {
    const newUrl = new urlSchema({
        full_url: longUrl,
        short_url: shorturl
    });
    if(userId) {
        newUrl.user_id = userId;
    }
    await newUrl.save();
    console.log(newUrl);
    return newUrl;
}   
