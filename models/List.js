const mongoose = require('mongoose');

const Item = require('./Item');
const User = require('./User');

const listSchema = new mongoose.Schema({
    name: {type: String, required: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
}, {timestamps: true});

var List = mongoose.model('List', listSchema);

module.exports = List;