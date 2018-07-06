const path = require('path');
const express = require('express');
const cors = require('cors');
const { PATH_DIST } = require('../webpack/webpack.config');
const SEARCH = require('./api/search.js');

const fs = require('fs');

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
app.use(express.static('./build'));
app.get('*', (req, res) => {
    console.log('log', req, res);

    console.log('amazing');
    fs.readdir(PATH_DIST, (err, files) => {
      files.forEach((file) => {
        console.log(file);
      });
  });
    res.sendFile('index.html', {
        root: path.join(process.cwd(), 'build'),
    });
});
