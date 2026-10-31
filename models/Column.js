import mongoose from 'mongoose';
const { Schema } = mongoose;

const columnSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true,
    default: 0
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Column', columnSchema);