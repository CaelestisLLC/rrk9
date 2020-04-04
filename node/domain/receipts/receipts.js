const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReceiptSchema = new Schema({
  loginId: [{
    type: Schema.Types.ObjectId,
    ref: 'Login'
  }],
  email: String,
  datetime: Date
});

var Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = Receipt;
