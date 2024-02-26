/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = require('../config/generateToken');
const UserModel = require('../models/user');

const getUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json('Error in getting users');
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(200).json({ status: 'success', user });
  } catch (error) {
    res.status(404).json('Error in registering user');
  }
};

// eslint-disable-next-line consistent-return
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json('No user found with this email');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json('Invalid password');
    }

    res
      .status(200)
      .json({ status: 'success', token: generateToken(user._id), user });
  } catch (error) {
    res.status(500).json('Error in logging in');
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUsers = await UserModel.deleteMany();
    res.status(200).json(deletedUsers);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { getUser, registerUser, loginUser, deleteUser };
