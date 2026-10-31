import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  position: {
    type: Number,
    required: true,
    default: 0
  },
  columnId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Column',
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Task', taskSchema);