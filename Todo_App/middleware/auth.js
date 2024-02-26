/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      if (!decoded.id) {
        return res.status(401).json('Invalid token, no user ID found');
      }

      req.user = await UserModel.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json('User not found');
      }
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      res.json('Not Authorized');
    }
  }

  if (!token) {
    res.status(401);
    res.json('Not authorized no token');
  }
};

module.exports = protect;
