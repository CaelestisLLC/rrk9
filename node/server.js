const express = require('express');
const bodyParser = require('body-parser');
const AuthController = require('./api/auth/controller.js');
const LoginController = require('./api/logins.js');
const ReceiptController = require('./api/receipts.js');

var port = process.env.PORT || 8080;

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

router.use(function(request, response, next) {
  next();
});
router.get('/system/ping', function(request, response) {
  response.json({ message: '200 OK' });
});

var authController = new AuthController();
authController.defineRoutes(router);
// var loginController = new LoginController();
// loginController.defineRoutes(router);
// var loginController = new LoginController();
// loginController.defineRoutes(router);

app.use('/api', router);
app.listen(port);
console.log('Listening on port ' + port);
