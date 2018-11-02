//importing the db models
const db = require('../models');


//Routing

module.exports  = function (app) {

    //GET request for pets
    app.get('/api/pets', function(req,res){
        db.Pets.findAll({}).then(function (rows)  {
            res.json(rows)
        }).catch(function(error) {
            res.json({error : error});
        });
    });

    //POST request for pets
    app.post('/api/pets', function(req,res){
        db.Pets.create(req.body).then(function (rows) {
            res.json({ success: true});
        }).catch(function (error) {
            res.json({ error: error})
        })
    });

    //GET request for specified pet
    app.get('/api/pets/:id', function (req, res) {
        db.Pets.find({ where: { id: req.params.id } })
        .then(function (data)  {
            res.json(data)
        }).catch(function(error) {
            res.json({error : error});
        });
    });

    //PUT request
    app.put('/api/pets/:id', function (req, res) {
        db.Pets.update(
            req.body,
            { where: { id: req.params.id } }
        ).then(function (response) {
            res.json({ success: true });
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    //DELETE request
    app.delete('/api/pets/:id', function (req, res) {
        db.Pets.destroy({ where: { id: req.params.id } })
        .then(function ()  {
            res.json( {success: true});
        }).catch(function(error) {
            res.json({error : error});
        });
    });



     //GET request for users
     app.get('/api/users', function(req,res){
        db.Users.findAll({}).then(function (rows)  {
            res.json(rows)
        }).catch(function(error) {
            res.json({error : error});
        });
    });

    //POST request for users 
    app.post('/api/users', function(req,res){
        db.Users.create(req.body).then(function (rows) {
            res.json({ success: true});
        }).catch(function (error) {
            res.json({ error: error})
        })
    });
}