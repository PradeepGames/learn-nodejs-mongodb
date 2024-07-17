const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    age:Number
});

module.exports = mongoose.model('products',ProductSchema);