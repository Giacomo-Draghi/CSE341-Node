// Importing modules
// HTTP
// const http = require('http');
// My routers
const routes = require('./routes');
// Express JS
const express = require('express');

// Creating a express application
const app = express();

// Working with the middleware
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The "Add Product" Page.</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>'); //Send a responce
});

console.log(routes.someText);

// This variable has an http function to request and response datas, and it will be the one creating the server.
// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);