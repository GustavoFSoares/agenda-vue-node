const express = require('express');
const db = require('../services/mongodb');
const contacts_default = require('../defaults/contacts-default')

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await db.contact().all());
    } catch (err) {
        res.status(400).json(await { msg: 'Contatos não encontrados', data_error: err });
    }
    next()
});

router.get('/find/:id', async (req, res, next) => {
    const { id } = req.params;
    
    try {
        res.status(200).json(await db.contact().getContact(id));
    } catch (err) {
        console.log(err);
        res.status(400).json(await { msg: 'Erro ao buscar contato', data_error: err });
    }
    next()
});

router.post('/add', async (req, res, next) => {
    try {
        res.status(200).json(await db.contact().save(req.body))
    } catch (err) {
        res.status(406).json(await { msg: 'Cadastro não efetuado', data_error: err });
    }
    next()
});

router.put('/edit/:id', async (req, res) => {
    const { id } = req.params;

    try {
        res.status(200).json(await db.contact().update(id, req.body));
    } catch (err) {
        res.status(400).json(await { msg: 'Contato não atualizado', data_error: err });
    }
});

router.post('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        res.status(200).json(await db.contact().delete(id));
    } catch (err) {
        res.status(400).json(await { msg: 'Contato não excluido', data_error: err });
    }
});

router.get('/insert', async (req, res) => {
    try {
        res.status(200).json(await db.contact().insert(contacts_default.contacts));
    } catch (err) {
        res.status(400).json(await { msg: 'Contato(s) não cadastrados', data_error: err})
    }
});

module.exports = app => app.use('/contact', router);