import { verifyToken } from "../utils/helper.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies?.accessToken;
    if (!token) {
        return next();
    }
    const user = verifyToken(token);
    if (!user) {
        return next();
    }

    req.user = user; 
    next(); 
}