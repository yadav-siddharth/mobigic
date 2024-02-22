const express = require('express');
const {
  getTask,
  postTask,
  updateTasks,
  deleteTasks,
  deleteAll,
  getOneTask,
} = require('../controllers/TaskFunction');

const router = express.Router();

router.get('/tasks', getTask);
router.get('/tasks/:id', getOneTask);
router.post('/tasks', postTask);
router.patch('/tasks/:id', updateTasks);
router.delete('/tasks/:id', deleteTasks);
router.delete('/tasks', deleteAll);

module.exports = router;
