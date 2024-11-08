// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    default: 'Player' // Starting cash amount
},
    cash: { 
        type: Number, 
        default: 10000 // Starting cash amount
    },
    portfolio: [{
        stock: { type: String, required: true },
        shares: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true }
    }]
});

module.exports = mongoose.model('User', userSchema);
