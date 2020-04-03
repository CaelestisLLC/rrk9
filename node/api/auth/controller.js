// require
const AuthService = require('./service.js');
const url = require('url');

function AuthController() { }

AuthController.prototype.defineRoutes = function(router) {
  //
  let authService = new AuthService();
  
  // GET /api/signin?email=user@domain.net HTTP/1.1
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
  
  router.route('/signin')
    .get(function (request, response) {
      let host = request.url;
      let profile = url.parse(host, true).query;
      let userEmail = profile.email;
      // create a token
      let token = authService.grantToken(userEmail);
      response.status(200).send({ auth: true, token: token });
    });
}

module.exports = AuthController;
