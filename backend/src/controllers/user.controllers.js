import { getAllUserUrls } from "../dao/user.dao.js"

export const getAllUrlsController = async (req, res) => {
    try {
        const user = req.user._id;
        const urls = await getAllUserUrls(user);
        console.log(urls);
        return res.status(200).json({message: "All urls received", urls: urls});
    } catch (error) {
        res.status(500).json({"message": "Internal Server Error Occured"})
    }
}