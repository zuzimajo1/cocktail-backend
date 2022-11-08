
const mongoose = require('mongoose');

const CocktailCart = mongoose.Schema({
  cartID: {type: Number},
  cocktailID: {type: Number},
  username: { type: String },
  cocktailImage: { type: String },
  cocktailTitle: { type: String },
  cocktailInfo: { type: String },
  cocktailGlass: { type: String },
  cocktailCategory: { type: String },
  cocktailIngredients1: { type: String },
  cocktailIngredients2: { type: String },
  cocktailIngredients3: { type: String },
  cocktailIngredients4: { type: String },
  cocktailIngredients5: {type: String },
  cocktailPrice: {type: Number},
  quantity : {type: Number},
  subTotal : {type: Number},
  CocktailisCheck : {type: Boolean, default: false},
},{timestamps: true});

module.exports = mongoose.model('Cart', CocktailCart);