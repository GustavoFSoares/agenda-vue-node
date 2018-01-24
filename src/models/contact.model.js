const mongoose = require('../database');

const ContactSchema = new mongoose.Schema({
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
        unique: true,
        required: false,
    },
    tel2: {
        type: String,
        unique: true,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;