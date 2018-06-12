// https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6
const express = require('express');
const bodyParser = require('body-parser');

// API's
const SEARCH = require('./search.js');

const app = express();

app.listen(8081, () => {
    console.log('API running at port 8081!\n');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.status(200).send('Welcome to our restful API');
});


SEARCH(app);

module.exports = app;
