const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/noderest');
mongoose.Promise = global.Promise;

module.exports = mongoose;

