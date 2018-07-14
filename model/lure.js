'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LureSchema = new Schema({
    name: String,
    model: String,
    quantity: Number,
    img_path: String,
});

module.exports = mongoose.model('Lure', LureSchema);
