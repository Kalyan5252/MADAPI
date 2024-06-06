import mongoose, { models, model } from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: [true] },
  password: { type: String, required: [true] },
  role: {
    type: String,
    required: [true],
    enum: ['user', 'admin'],
    default: 'user',
  },
});

const mUsers = models?.mUsers || model('mUsers', userSchema);

export default mUsers;
