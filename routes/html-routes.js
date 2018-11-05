//dependencies

const path = require('path');


//Routing 

module.exports = function (app, passport) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/about', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/about.html'));
    });

    // app.get('/user', function (req, res) {
    //     res.sendFile(path.join(__dirname, '../public/user.html'));
    // });

    app.get('/search', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/search.html'));
    });

    app.get('/contact', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/contact.html'));
    });


    app.get('/admin', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/admin.html'));
    });


    app.get('/signup', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/signup.html'))
    });

    app.get('/signin', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/signin.html'))
    })

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/signin',

        failureRedirect: '/signup'
    }
    ));



    //route to the page when a user logs in
    app.get('/user', isLoggedIn, function (req, res) {
        res.sendFile(path.join(__dirname, '../public/user.html'))
    })

    //using this route to destroy the session and logout the user
    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {

            res.redirect('/');
        });
    })

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/user',
        failureRedirect: '/signin'
    }
    ));



//adding this function to only allow logged in users to view the page
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }
};