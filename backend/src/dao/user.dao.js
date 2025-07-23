import urlSchema from "../model/shortUrlSchema.model.js"
export const getAllUserUrls = async (userId) => {
    const urls = await urlSchema.find({user: userId});
    const fullUrls = urls.map(u => `${process.env.APP}${u.short_url}`);
    return fullUrls;
}