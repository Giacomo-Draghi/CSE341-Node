const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// Get uses EXACT metch, so it will not always run, unlike the use()
router.get('/', (req, res, next) => {
    console.log('Home middleware!');
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); //Send a responce
});

module.exports = router;