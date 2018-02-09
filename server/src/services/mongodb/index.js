const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/agenda')
mongoose.Promise = global.Promise

const contact = require('./contact')
const resume = require('./resume')

module.exports = {
    contact: contact,
    resume: resume
}
