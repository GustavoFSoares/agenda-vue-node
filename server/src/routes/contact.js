const express = require('express');
const db = require('../services/mongodb');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await db.contact().all());
    } catch (err) {
        console.log(err);
        res.status(400).json(await { error: 'Contatos não encontrados' });
    }
    next()
});

router.get('/find/:id', async (req, res, next) => {
    const { id } = req.params;
    
    try {
        res.status(200).json(await db.contact().getContact(id));
    } catch (err) {
        console.log(err);
        res.status(400).json(await { error: 'Erro ao buscar contato' });
    }
    next()
});

router.post('/add', async (req, res, next) => {
    try {
        res.status(200).json(await db.contact().save(req.body))
    } catch (err) {
        console.log(err);
        res.status(400).json(await { error: 'Cadastro não efetuado' });
    }
    next()
});

router.put('/edit/:id', async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await db.contact().update(id, req.body));
    } catch (err) {
        console.log(err);
        res.status(400).json(await { error: 'Contato não atualizado' });
    }
});

router.post('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await db.contact().delete(id));
    } catch (err) {
        console.log(err);
        res.status(400).json(await { error: 'Contato não excluido' });
    }
});

router.get('/insert', async (req, res) => {
    let contacts = [
            { "name": "Gustavo Soares", "email": "gustavo10.fsoares@gmail.com", "tel1": "51-984700974", "tel2": "51-999207540" },
            { "name": "Fabricio Soares", "email": "fabricio10.fsoares@gmail.com", "tel1": "51-984621064", "tel2": "" },
            { "name": "Felipe Juchem", "email": "fj@gmail.com", "tel1": "51-123465", "tel2": "" },
        ];
    try {
        res.status(200).json(await db.contact().insert(contacts));
    } catch (err) {
        console.log(err);
        res.status(400).json(await { error: 'Contatos não cadastrados '})
    }
});

module.exports = app => app.use('/contact', router);