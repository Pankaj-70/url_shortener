import userSchema from './src/models/user.model.js';
export const findUserByEmail = async (email) => {
    const user = await userSchema.findOne({ email });
    return user;
};

export const findUserById = async (id) => {
    const user = await userSchema.findById(id);
    return user;
};