const express = require('express');
const db = require('../services/mongodb');
const default_resume = require('../defaults/resume-default')

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await db.resume().getResume());
    } catch (err) {
        res.status(400).json(await { msg: 'Currículo não encontrados', data_error: err });
    }
    next()
});

router.post('/add', async (req, res, next) => {
    try {
        res.status(200).json(await db.resume().save(req.body));
    } catch (err) {
        res.status(400).json(await { msg: 'Curriculo não cadastrado', data_error: err });
    }
    next()
});

router.put('/edit/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        res.status(200).json(await db.resume().update(id, req.body))
    } catch (err) {
        res.status(400).json(await { msg: "Currículo não atualizado" })
    }
})

router.post('/delete/:id', async (req, res, next) => {
    try {
        
    } catch (err) {
        
    }
})

router.get('/insert', async (req, res, next) => {   
    try {
        res.status(200).json(await db.resume().save(default_resume.resume));
    } catch (err) {
        res.status(400).json(await { msg: 'Curriculo não cadastrado', data_error: err });
    }
    next()
});

module.exports = app => app.use('/resume', router);