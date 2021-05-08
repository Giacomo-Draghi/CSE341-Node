// Importing modules
// Express JS
const express = require('express');
// Body parser
const bodyParser = require('body-parser');
// Path
const path = require('path');

const productsRoutes = require('./routers/products');
// const errorController = require('./controllers/error');

// Creating a express application
const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

// Working with the middleware
// parsing 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Calling the router object
app.use(productsRoutes);

// app.use(errorController.get404); 

app.listen(3000);