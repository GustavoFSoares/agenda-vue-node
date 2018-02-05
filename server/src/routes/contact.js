const express = require('express');
const db = require('../services/mongodb');

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
    let contacts = [
        { "name": "Gustavo Soares", "email": "gustavo10.fsoares@gmail.com", "tel1": "51-984700974", "tel2": "51-999207540", "url": "https://2.bp.blogspot.com/-OJwDW543uJA/Vp4mHO4mNII/AAAAAAAADwg/fhtHI1Q2p4E/s1600/annoyed-boss-office-corporate-cartoon-people_zyNMHJd__L.jpg" },
        { "name": "Fabricio Soares", "email": "fabricio10.fsoares@gmail.com", "tel1": "51-984621064", "tel2": "", "url": "https://st.depositphotos.com/1037178/3043/v/950/depositphotos_30431021-stock-illustration-presenter-office-corporate-cartoon-people.jpg" },
        { "name": "Felipe Juchem", "email": "fj@gmail.com", "tel1": "51-123465", "tel2": "", "url": "https://thumbs.dreamstime.com/t/personaje-de-dibujos-animados-de-la-meditación-70832971.jpg" },
        ];

    try {
        res.status(200).json(await db.contact().insert(contacts));
    } catch (err) {
        res.status(400).json(await { msg: 'Contato(s) não cadastrados', data_error: err})
    }
});

module.exports = app => app.use('/contact', router);