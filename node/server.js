var express = require('express');
var bodyParser = require('body-parser');
var AuthController = require('./api/auth.js');
var LoginController = require('./api/logins.js');
var ReceiptController = require('./api/receipts.js');

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

// var loginController = new LoginController();
// loginController.defineRoutes(router);

app.use('/api', router);
app.listen(port);
console.log('Listening on port ' + port);
