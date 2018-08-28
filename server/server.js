//------------SETTINGS---------------

require('./config/config');
//Express
const express = require('express');
const app = express();
//Mongoose
const mongoose = require('mongoose');
//colors
const colors = require('colors');


//body parser
const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//--------------------------------------

//app uses user routes
app.use(require('./routes/usuario'));



//connect to database
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE'.green);
});

//Listen to port
app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto", process.env.PORT);
});