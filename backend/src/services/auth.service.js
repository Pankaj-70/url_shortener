import { createUser, findUserByEmail } from "../dao/auth.dao.js";
import { signToken, verifyToken } from "../utils/helper.js";

export const registerUser = async ({name, email, password}) => {
    const newUser = await createUser({ name, email, password });
    const token = signToken({id: newUser._id});
    return token;
}


export const loginUser = async ({email, password}) => {
    const user = await findUserByEmail(email);
    const token = signToken({id: user._id});
    return token;
}