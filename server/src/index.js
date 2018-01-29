const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('OK'); 
});

require('./routes/contact')(app)

app.listen(3000, () => {
    console.log(`Server On`);
});