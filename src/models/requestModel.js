import { Schema, models, model } from 'mongoose';

const requestSchema = new Schema({
  type: { type: String, required: true, enum: ['mail', 'call', 'chat'] },
  userName: { type: String, required: [true] },
  active: { type: Boolean, default: true },
  message: { type: String, select: false },
  subject: { type: String, select: false },
});

const requests = models?.requests || model('requests', requestSchema);

export default requests;
