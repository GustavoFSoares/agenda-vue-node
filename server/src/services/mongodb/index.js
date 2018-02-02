const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/agenda')
mongoose.Promise = global.Promise

const contact = require('./contact')

module.exports = {
    contact: contact
}
