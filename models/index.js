const mongoose = require('mongoose');

mongoose.set('debug',true);
mongoose.Promise = global.Promise;

// Connect to Mongo database.
mongoose.connect('mongodb://localhost/want-list');

// Export User, Item, and List models.
module.exports.User = require('./User');
module.exports.Item = require('./Item');
module.exports.List = require('./List');