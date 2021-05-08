const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const productsController = require('../controllers/products');

const router = express.Router();

// Get uses EXACT metch, so it will not always run, unlike the use()
router.get('/products', productsController.getProduct);

module.exports = router;