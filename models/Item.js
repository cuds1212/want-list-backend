const mongoose = require('mongoose');

const User = require('./User');

const itemSchema = new mongoose.Schema({
    name: String,
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    url: String,
    photoUrl: String,
    priority: {type: String, default: 'low', required: true},
    isPurchased: {type: Boolean, default: false, required: true},
    purchasedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null}
}, {timestamps: true});

var Item = mongoose.model("Item", itemSchema);

module.exports = Item;