// require
const AuthService = require('./service.js');

function AuthController() { }

AuthController.prototype.defineRoutes = function(router) {
  //
  var authService = new AuthService();
  
  router.route('/authorize')
    .get(function (request, response) {
      let trusted = authService.isAuthenticated(request.body/*should be jwt*/);
      if (!trusted) { response.status(401).end(); } else {
        // get issuer
        // get nonce
        // generate claims
        // generate encoded token
        var jwt = { fake: "not a JWT" };
        response.json(jwt);
      }
    })
}

module.exports = AuthController;
