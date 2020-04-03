// require
const AuthService = require('./service.js');

function AuthController() { }

AuthController.prototype.defineRoutes = function(router) {
  //
  let authService = new AuthService();
  
  router.route('/authorize')
    .get(function (request, response) {
      //console.log(request);
      let token = request.headers.authorization;
      console.log(token);
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
        // let jwt = { fake: "not a JWT" };

        response.json({ auth: true, token: token.replace('Bearer ','') });
      }
    });
  
  router.route('/signin')
    .get(function (request, response) {
      let userEmail = 'president@whitehouse.gov';
      // create a token
      let token = authService.grantToken(userEmail);
      response.status(200).send({ auth: true, token: token });
    });
}

module.exports = AuthController;
