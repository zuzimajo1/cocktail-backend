const mongoose = require('mongoose');

const DeleteOrder = mongoose.Schema({
  OrderID: { type: Number },
  username: { type: String },
  DeleteOrderItem: {type: Object},
});

module.exports = mongoose.model('DeleteOrder', DeleteOrder);

