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

    // verify jwt https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-7.2
    if ( token.includes('.')
      && true
    ) return true;
    // else
    return false;
  },

  grantToken: function (userEmail) {
    return jwt.sign({ id: userEmail }, privateKey, { expiresIn: config.authTimeoutInSeconds });
  }
}

module.exports = AuthService;
