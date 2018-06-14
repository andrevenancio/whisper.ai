const express = require('express');
const Twit = require('twit');
const config = require('./config.js');

const twitter = new Twit(config);

const SEARCH = (app) => {
    // Create the express router
    const router = express.Router();

    router.get('/', async (req, res) => {
        const options = {
            q: req.query.key,
            count: req.query.count || 5,
        };
        const response = await twitter.get('users/search', options);
        res.json(response);
    });

    app.use('/api/search', router);
};

module.exports = SEARCH;
