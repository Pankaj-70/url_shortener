import { findUserById } from "../dao/auth.dao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token) {
        return res.status(401).json({ error: "Access token is required" });
    }
    try {
        const decoded = verifyToken(token);
        const user = await findUserById(decoded.id);
        if(!user) {
            return res.status(404).json({ error: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        return res.status(403).json({ error: "Invalid or expired token" });
    }
}