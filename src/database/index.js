const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/agendaCwi');
mongoose.Promise = global.Promise;

module.exports = mongoose;

