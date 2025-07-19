import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: function() {
      return `https://www.gravatar.com/avatar/${this.email ? this.email.trim().toLowerCase() : ''}?d=identicon`;
    },
  },
});


const User = mongoose.model('User', userSchema);

export default User;