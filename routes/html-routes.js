//dependencies

const path = require('path');


//Routing 

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/about', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/about.html'));
    });

    app.get('/pet', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/pet.html'));
        
    });

    app.get('/search', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/search.html'));
    });

    app.get('/contact', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/contact.html'));
    });

};