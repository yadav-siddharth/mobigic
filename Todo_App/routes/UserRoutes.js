const express = require('express');

const router = express.Router();
const {
  getUser,
  registerUser,
  loginUser,
  deleteUser,
} = require('../controllers/UserFunction');

router.get('/getuser', getUser);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/deleteuser', deleteUser);

module.exports = router;
