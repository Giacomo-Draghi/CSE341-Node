// Adding modules
const express = require('express');

const app = express();

// app.use('/product', (req, res, next) => {
//     console.log('Product Page');
//     res.send('<h1>Product Page</h1>');
// });

app.use('/users', (req, res, next) => {
    console.log('Users Page');
    res.send('<h1>Users Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Main Page');
    res.send('<h1>Main Express Page</h1>');
});

app.listen(3000);