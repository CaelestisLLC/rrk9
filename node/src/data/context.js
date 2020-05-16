// Verbal Websites data layer.
//
// This provides a connection to the database. It takes the configuration as an input
// and returns a working context.
//
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
const mongoose = require('mongoose');

function Context() {}

Context.prototype = {
  get: function (config) {
    return mongoose.connect(config.connectionString, {
      serverSelectionTimeoutMS: 2000,
      connectTimeoutMS: 5000,
      socketTimeoutMS: 20000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: { 
        authSource: 'admin',
        user: 'mongoadmin',
        password: 'p@ssw0rdToYourMom'
      },
    }).then(() => { 
      console.log('Connected to database.'); 
    }).catch((error) => {
      console.log(error);
    });
  }
}

module.exports = Context.prototype;
