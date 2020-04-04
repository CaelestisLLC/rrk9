const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  email: String,
  // userId: String,
  datetime: Date
});

const Login = mongoose.model('Login', LoginSchema);

// ???
module.exports = Login;
