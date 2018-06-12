const path = require('path');
const express = require('express');
// const API = require('./api.js');

const app = express();

app.use(express.static('./build'));

// API(app);

app.use('*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(process.cwd(), 'build'),
    });
});

app.listen(8080, () => {
    console.log('Example app listening on port 8080!\n');
});
