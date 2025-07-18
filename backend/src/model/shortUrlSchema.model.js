import mongoose from 'mongoose';

const shortURLSchema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true,
    },
    short_url: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    clicks: {
        type: Number,
        default: 0,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }
});

const ShortURL = mongoose.model('ShortURL', shortURLSchema);
export default ShortURL;
