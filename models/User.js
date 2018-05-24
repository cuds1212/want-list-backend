const mongoose = require('mongoose');

const Item = require('./Item');
const List = require('./List');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    photoUrl: String,
    lists: [{type: mongoose.Schema.Types.ObjectId, ref: 'List'}],
    purchases: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
}, {timestamps: true});

var User = mongoose.model("User", userSchema);

module.exports = User;