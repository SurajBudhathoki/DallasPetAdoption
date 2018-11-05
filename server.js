//Require the dependencies
const express = require('express');
const path =require('path');
const passport   = require('passport')
const session    = require('express-session')


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



app.use(express.static(path.join(__dirname, 'public')));


//Routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app,passport);
require('./config/passport.js')(passport);

const db = require('./models');

db.sequelize.sync().then(function() {

    app.listen(PORT, function() {
        console.log(`App is now listening on PORT ${PORT}`)
    });

})

