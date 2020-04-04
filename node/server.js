const express = require('express');
const bodyParser = require('body-parser');
const AuthController = require('./api/auth/controller.js');
const ReceiptController = require('./api/receipts.js');

const port = process.env.PORT || 8080;

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

router.use(function(request, response, next) {
  next();
});
router.get('/system/ping', function(request, response) {
  response.json({ message: '200 OK' });
});

const authController = new AuthController();
authController.defineRoutes(router);

app.use('/api', router);
app.listen(port);
console.log('Listening on port ' + port);
