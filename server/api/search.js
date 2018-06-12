const express = require('express');

// https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-search
const SEARCH = (app) => {
    // Create the express router
    const router = express.Router();

    // A GET to the root of a resource returns a list of that resource
    router.get('/', (req, res) => {
        res.end();
    });

    // A POST to the root of a resource should create a new object
    router.post('/', (req, res) => {
        res.end();
    });

    // We specify a param in our path for the GET of a specific object
    router.get('/:id', (req, res) => {
        res.end();
    });

    // Similar to the GET on an object, to update it we can PATCH
    router.patch('/:id', (req, res) => {
        res.end();
    });

    // Delete a specific object
    router.delete('/:id', (req, res) => {
        res.end();
    });

    // Attach the routers for their respective paths
    app.use('/api/search', router);
};

module.exports = SEARCH;
