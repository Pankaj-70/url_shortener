export const registerUser = async ({name, email, password}) => {
    if (!name || !email || !password) {
        res.status(400).json({ error: "All fields are required" });
    }
}
export const loginUser = async (req, res) => {
    // Implementation for user login
}