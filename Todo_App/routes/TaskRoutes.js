const express = require('express');
const {
  getTask,
  postTask,
  updateTasks,
  deleteTasks,
  deleteAll,
  getOneTask,
} = require('../controllers/TaskFunction');
const protect = require('../middleware/auth');

const router = express.Router();

router.get('/tasks', protect, getTask);
router.get('/tasks/:id', protect, getOneTask);
router.post('/tasks', protect, postTask);
router.patch('/tasks/:id', protect, updateTasks);
router.delete('/tasks/:id', protect, deleteTasks);
router.delete('/tasks', protect, deleteAll);

module.exports = router;
