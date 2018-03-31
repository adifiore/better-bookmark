const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: {type: String, required: true, unique: true},
  category: {type: String, required: true},
  url: {type: String, required: true},
  liked: {type: Boolean, default: false},
  notes: String
});

module.exports = mongoose.model('Card', CardSchema);
