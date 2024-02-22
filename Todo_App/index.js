const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

const TaskRoutes = require('./routes/TaskRoutes');

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api', TaskRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// app.get('/api/tasks', async (req, res) => {
//   const result = await TaskModel.find();
//   res.json(result);
// });

// app.post('/api/tasks', async (req, res) => {
//   const { title, describe, time, status } = req.body;
//   const task = new TaskModel({ title, describe, time, status });
//   const result = await task.save();
//   res.json(result);
// });

// const createTask = async () => {
//   const task1 = new TaskModel({
//     title: 'Task1',
//     describe: 'Clean House',
//     time: 2,
//     status: 'completed',
//   });
//   const result = await TaskModel.create(task1);
//   console.log(result);
// };
// createTask();

// const getTask = async () => {
//   const result = await TaskModel.find();
//   console.log(result);
// };

// getTask();

// const insertTask = async () => {
//   const task2 = new TaskModel({
//     title: 'Task 2',
//     describe: 'Get Groceries',
//     time: 1,
//     status: 'incompleted',
//   });
//   const task3 = new TaskModel({
//     title: 'Task 3',
//     describe: 'Study for exam',
//     time: 3,
//     status: 'pending',
//   });
//   const result = await TaskModel.insertMany([task2, task3]);
//   console.log(result);
// };

// insertTask();
