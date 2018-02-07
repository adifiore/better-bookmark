const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {type: String, required: true, unique: true},
  category: {type: String, required: true},
  link: {type: String, required: true},
  liked: {type: Boolean, default: false},
  notes: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
