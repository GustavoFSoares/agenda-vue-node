const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/agendaCwi')
mongoose.Promise = global.Promise

const contact = require('./contact')

module.exports = {
    contact: contact
}


