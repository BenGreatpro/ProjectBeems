const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    
    email: String,
    password:{
        type: String,
        required: true,
        max: 30,
        min: 8,
    },
    timestamps: {
        type: Date,
        default: Date.now(),
    },


});






module.exports = mongoose.model('User', userSchema)