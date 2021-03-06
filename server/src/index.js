const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

app.get('/', (req, res) => {
    res.send('OK'); 
});

require('./routes/contact')(app)
require('./routes/resume')(app) // olhar aqui

app.listen(3000, () => {
    console.log(`Server On`);
})