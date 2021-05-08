const Product = require('../models/product');
const fetch = require('node-fetch');



exports.getProduct = (req, res, next) => {
    const url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';
    let settings = { method: "Get" };

    let products = fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            // console.log(json);
            products = json;
            // console.log(products);
            res.render('products', {
                prods: products,
                pageTitle: 'All Products',
                path: '/products',
                hasProducts: products.length > 0,
                activeShop: true,
                productCSS: true
            });
        });
};