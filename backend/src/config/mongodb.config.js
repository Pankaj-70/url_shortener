import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully at ', process.env.MONGODB_URI);
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
}

export default connectDB;