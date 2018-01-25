const express = require('express');
const db = require('../services/mongodb');

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        let result = db.contact().save(req.body);
        console.log(result);
        
        // return res.status(200).send();
        res.json(result)
    } catch (err) {
        console.log(err);

        return res.status(400).send({ error: 'Cadastro não efetuado' });
    }
});

router.get('/', async (req, res) => {
    try {

        return res.send("DEU GET");
    } catch (err) {

        return res.status(400).send({ error: 'Contatos não encontrados' });
    }
});

router.get('/find/:name', async (req, res) => {
    const { name } = req.params;
    try {
        let contact = name;

        if(contact == undefined){
            return res.status(404).send(`Contato "${name}" encontrado`);
        }else{
            return res.status(200).send("contact");
        }
        
    } catch (err) {
        console.log(err);
        
        return res.status(400).send({ error: 'Contatos não encontrados' });
    }
});

router.put('/edit/:id', async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id);
        
        return res.status(200).send(id);
    } catch (err) {
        console.log(err);

        return res.status(400).send({ error: 'Contato não atualizado' });
    }
});

router.delete('/delete/:id', (req, res) =>{
    const { id } = req.params;    
    try {

        return res.status(200).send(id);
    } catch (err) {
        console.log(err);

        return res.status(400).send({ error: 'Cadastro não atualizado' });
    }
});

module.exports = app => app.use('/contact', router);