// The Verbal Websites auth service.
//
// OAuth: https://tools.ietf.org/html/rfc6749
// JWT:   https://tools.ietf.org/html/rfc7519
// JWS:   https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41
// https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/
//
// There was no real reason to pick JWS over JWE, except that there were more examples available.
// To use JWE, you'd want this library:
// const jose = require('node-jose');
//
// Instead, we're just going with this, which makes use of 'node-jws' instead:
// https://github.com/auth0/node-jsonwebtoken
//
const jwt = require('jsonwebtoken');

// https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
const fs = require('fs');
const privateKey = fs.readFileSync('verbal_rsa');
// const publicKey = fs.readFileSync("verbal_rsa.pub");

const config = require('../../config.js');
const Context = require('../../data/context.js');
Context.get(config);

const Login = require('../../domain/logins/logins.js');

function AuthService () { }
AuthService.prototype = {
  isAuthenticated: function (token) {

    let plainText = jwt.decode(token);
    return jwt.verify(token, privateKey, function(error) {
      if (error) {
        console.log(error.name + ":", error.message, plainText);
        return false;
      }

      console.log("Validated", plainText);
      return true;
    });
  },

  grantToken: function (userEmail) {

    let token = jwt.sign({ id: userEmail }, privateKey, { expiresIn: config.jwtAuthTimeoutInSeconds });
    let milliseconds = new Date().getMilliseconds();
    let timestamp = jwt.decode(token).iat * 1000 + milliseconds;

    let login = new Login({ email: userEmail, datetime: timestamp });
    
    login.save(function (error) {
      if (error)
        console.log(error);
    });

    console.log("Token issued for", userEmail, "at", timestamp);

    return token;
  }
}

module.exports = AuthService;
