import { loginUser, registerUser } from "../services/auth.service.js";
import { findUserByEmail } from "../dao/auth.dao.js";
import { cookieOptions } from "../config/auth.config.js";
import bcrypt from "bcryptjs";

export const register_user = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const FindUser = await findUserByEmail(email);
    if (FindUser) {
        return res.status(409).json({ error: "User already exists" });
    }
    
    const {token, user} = await registerUser({ name, email, password });
    res.cookie("accessToken", token, cookieOptions);
    res.status(201).json({ message: "Registration successful", user});
}


export const login_user = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const user = await findUserByEmail(email);
    if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = await loginUser({ email, password });
    res.cookie("accessToken", token, cookieOptions);
    res.status(200).json({ message: "Login successful", user: { id: user.id, name: user.name, email: user.email } });
}


export const getCurrentUser = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        res.status(200).json({ user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        console.error("Error in getCurrentUser:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}