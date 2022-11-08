const mongoose = require('mongoose');

const CocktailOrder = mongoose.Schema({
  orderID: { type: Number },
  username: { type: String },
  LocationDetail: { type: String },
  NumberDetail: { type: Number },
  CocktailContainerItems: {type: Object},
});

module.exports = mongoose.model('Order', CocktailOrder);