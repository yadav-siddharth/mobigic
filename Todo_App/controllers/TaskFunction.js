const TaskModel = require('../models/schema');

const getTask = async (req, res) => {
  try {
    const task = await TaskModel.find({ user: req.user.id });
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getOneTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskModel.findById({ _id: taskID });
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json(error);
  }
};

const postTask = async (req, res) => {
  try {
    const { title, describe, time, status } = req.body;
    const task = new TaskModel({
      title,
      describe,
      time,
      status,
      user: req.user.id,
    });
    const result = await task.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
    });
    if (!task) {
      res.status(404).json('No Task Found');
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json('No Task found');
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteAll = async (req, res) => {
  try {
    const task = await TaskModel.deleteMany();
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getTask,
  getOneTask,
  postTask,
  updateTasks,
  deleteTasks,
  deleteAll,
};
