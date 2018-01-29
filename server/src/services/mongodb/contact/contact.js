const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: false,
        lowercase: true,
    },
    tel1: {
        type: String,
        required: false,
        default: ""
    },
    tel2: {
        type: String,
        required: false,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('contact', contactSchema)