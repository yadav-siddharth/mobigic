const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const TaskModel = require('./models/schema');

const PORT = process.env.PORT || 8000;
const app = express();

connectDB();

const createTask = async () => {
  const task1 = new TaskModel({
    title: 'Task1',
    describe: 'Clean House',
    time: 2,
    status: 'completed',
  });
  const result = await TaskModel.create(task1);
  console.log(result);
};
createTask();

const getTask = async () => {
  const result = await TaskModel.find();
  console.log(result);
};

// getTask();

const insertTask = async () => {
  const task2 = new TaskModel({
    title: 'Task 2',
    describe: 'Get Groceries',
    time: 1,
    status: 'incompleted',
  });
  const task3 = new TaskModel({
    title: 'Task 3',
    describe: 'Study for exam',
    time: 3,
    status: 'pending',
  });
  const result = await TaskModel.insertMany([task2, task3]);
  console.log(result);
};

insertTask();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
