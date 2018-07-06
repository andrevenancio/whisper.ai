const express = require('express');
const cors = require('cors');
const { PATH_DIST } = require('../webpack/webpack.config');
const SEARCH = require('./api/search.js');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.options('*', cors());

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// api routes
app.get('/api', (req, res) => {
    res.status(200).send('rest api');
});

SEARCH(app);

app.get('/andre', (req, res) => {
    res.status(200).send(PATH_DIST);
});

// all other routes
app.use(express.static(PATH_DIST));
app.get('*', (req, res) => {
    res.sendFile('index.html', {
        root: PATH_DIST,
    });
});
