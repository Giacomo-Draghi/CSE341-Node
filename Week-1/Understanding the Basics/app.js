// Importing modules
// My routers
const routes = require('./routes');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// Express JS
const express = require('express');
// Body parser
const bodyParser = require('body-parser');
// Path
const path = require('path');
// handlebars
// const expressHbs = require('express-handlebars');
// Controllers
const errorController = require('./controllers/error');
const User = require('./models/user');

// Creating a express application
const app = express();

// telling to compile with templates and adding it
app.set('view engine', 'ejs');
app.set('views', 'views');

// Working with the middleware
// parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    // User.findByPk(1)
    // .then(user =>{
    //     req.user = user;
    //     next();
    // })
    // .catch(err => console.log(err));
});

// Calling the router object
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

