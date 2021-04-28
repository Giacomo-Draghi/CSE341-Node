const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    console.log('Add-product middleware!');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log('Product middleware!');
    products.push({title: req.body.title});
    res.redirect('/'); //redirecting to the main page
});

exports.routers = router;
exports.products = products;