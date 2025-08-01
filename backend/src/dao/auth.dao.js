import userSchema from '../model/userSchema.model.js';

export const findUserByEmail = async (email) => {
    const user = await userSchema.findOne({ email: email });
    return user;
};

export const findUserById = async (id) => {
    const user = await userSchema.findById(id);
    return user;
};

export const createUser = async ({name, email, password}) => {
    const user = new userSchema({ name, email, password });
    await user.save();
    return user;
};