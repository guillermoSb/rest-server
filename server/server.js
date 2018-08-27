//------------SETTINGS---------------

require('../config/config');

const express = require('express')
const app = express()


//body parser
const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//--------------------------------------


//GET
app.get('/usuario', function(req, res) {
    res.json('get Usuarios');
});

//POST
app.post('/usuario', function(req, res) {
    let body = req.body;
    res.json({
        persona: body
    });
});

//PUT
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

//DELETE
app.delete('/usuario', function(req, res) {
    res.json('delete Usuarios');
});

//Listen to port
app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto", process.env.PORT);
});