const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LoginSchema = new Schema({
  email: String,
  // userId: String,
  datetime: Date
});

let Login = mongoose.model('Login', LoginSchema);

// ???
module.exports = Login;
