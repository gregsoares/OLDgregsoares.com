const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  subscribed: Boolean,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
