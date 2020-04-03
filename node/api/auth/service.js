// The Verbal Websites auth service.
//
// OAuth: https://tools.ietf.org/html/rfc6749
// JWT:   https://tools.ietf.org/html/rfc7519
// JWS:   https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41
// https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication/
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
const fs = require('fs');
// https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
const privateKey = fs.readFileSync("verbal_rsa");
const publicKey = fs.readFileSync("verbal_rsa.pub");
const config = require('../../config.js');

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
    console.log("Token issued for", userEmail, "at", Date.now());

    return jwt.sign({ id: userEmail }, privateKey, { expiresIn: config.authTimeoutInSeconds });
  }
}

module.exports = AuthService;
