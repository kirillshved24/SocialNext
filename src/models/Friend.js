import mongoose from 'mongoose';

const friendSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  friendId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.models.Friend || mongoose.model('Friend', friendSchema);