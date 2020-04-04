// require
const AuthService = require('./service.js');
const url = require('url');

function AuthController() { }

AuthController.prototype.defineRoutes = function(router) {
  //
  let authService = new AuthService();
  
  // Authorization scope
  //
  // GET /api/authorize HTTP/1.1
  // with Bearer token equal to JWT
  router.route('/authorize')
    .get(function (request, response) {

      let token = request.headers.authorization.replace('Bearer ', '');
      if (!token) 
        return response.status(401).send({ auth: false, message: 'No token provided.' });

      let trusted = authService.isAuthenticated(token);
      if (!trusted)
        response.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
      else {
        // get issuer
        // get nonce
        // generate claims
        // generate encoded token
        // etc.

        // for now, just return the same token; they can get a new one if they need it.
        response.json({ auth: true, token: token });
      }
    });
  
  // User signin. This should be reliant on OAuth2, but this is a quick-and-dirty give-me-a-JWT so that we can develop.
  //
  // GET /api/signin?email=user@domain.net HTTP/1.1
  router.route('/signin')
    .get(function (request, response) {
      let host = request.url;
      let profile = url.parse(host, true).query;
      let userEmail = profile.email;
      // create a token
      let token = authService.grantToken(userEmail);
      response.status(200).send({ auth: true, token: token });
    });

  //
  // GET /api/refresh HTTP/1.1
  // Not implemented. Try: https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication/
  //

}

module.exports = AuthController;
