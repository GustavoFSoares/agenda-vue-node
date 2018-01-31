const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    next()
})

app.get('/', (req, res) => {
    res.send('OK'); 
});

require('./routes/contact')(app)

app.listen(3000, () => {
    console.log(`Server On`);
})