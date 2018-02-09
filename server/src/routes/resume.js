const express = require('express');
const db = require('../services/mongodb');

const router = express.Router();

router.get('/', async (req, res, next) => {
    res.send('ok')
});
module.exports = app => app.use('/resume', router);