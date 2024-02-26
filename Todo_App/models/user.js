const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// eslint-disable-next-line new-cap
const UserModel = new mongoose.model('user', userSchema);

module.exports = UserModel;
