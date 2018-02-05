const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    url: {
        type: String,
        default: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('contact', contactSchema)