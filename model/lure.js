'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LureSchema = new Schema({
  name: String,
  model: String,
  description: String,
  quantity: Number,
  img_path: String,
  additional_fields: Map,
});

module.exports = mongoose.model('Lure', LureSchema);
