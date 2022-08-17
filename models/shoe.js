const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const shoeSchema = new Schema({
    brand: String,
    size: String,
    price: Number,
    color: String,
    quantity: Number
})

module.exports = mongoose.model('Shoe', shoeSchema);