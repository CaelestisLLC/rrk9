// Verbal Websites receipts controller.
const ReceiptService = require('../../business/receipts/service.js');

function ReceiptController() { }

ReceiptController.prototype.defineRoutes = function(router) {
  //
  let receiptService = new ReceiptService();
  
  // Authorization scope
  //
  // GET /api/receipts HTTP/1.1
  // POST /api/receipts HTTP/1.1
  router.route('/receipts')
    .get(function (request, response) {
      return null;
    })
    .put(function (request, response) {
      return null;
    });
}

module.exports = ReceiptController;
