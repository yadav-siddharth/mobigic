const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  title: { type: String },
  describe: String,
  time: Number,
  status: String,
});

// eslint-disable-next-line new-cap
const TaskModel = new mongoose.model('task', taskSchema);

module.exports = TaskModel;
