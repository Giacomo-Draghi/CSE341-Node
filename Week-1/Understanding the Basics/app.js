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
// mongoose
const mongoose = require('mongoose');
// Controllers
const errorController = require('./controllers/error');
const User = require('./models/user');
const { use } = require('./routes/shop');

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
    User.findById('60a16e9b8b13262cf0634c1f')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

// Calling the router object
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
    .connect('mongodb+srv://giacomo:963741@cluster0.btxa6.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
        User.findOne().then(user => {
            if (!user) {
                const user = new User ({
                    name: 'Giacomo',
                    email: 'jak127@yahoo.it',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        });
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });