
const https = require('https');

function AuthService () { }

AuthService.prototype = {
  isAuthenticated: function (jwt) {
    // verify jwt timestamp, etc.
    return true;
  }
}

module.exports = AuthService;
