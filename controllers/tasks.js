import Task from "../models/task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  const user_id = "63f35472ddd0400fb21a60b3";

  const newTask = new Task({
    title,
    description,
    user_id,
  });

  try {
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
      },
      { new: true }
    );

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
