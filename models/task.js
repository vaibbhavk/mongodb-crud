import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  user_id: mongoose.ObjectId,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
