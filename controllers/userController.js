const User = require('../models/userModel');

const exports = {};
module.exports = exports;


exports.getAll = async (res) => {
  const users = await User.find({});

  res.status(200).json(users);
};

exports.getUser = async (req, res) => {
  const thisUser = new User(req.body);
  const retUser = await thisUser.find(req.body);

  res.status(200).json(retUser);
};

exports.newUser = async (req, res) => {
  const thisUser = new User(req.body);
  const retUser = await thisUser.find(req.body);

  res.status(200).json(retUser);
};
