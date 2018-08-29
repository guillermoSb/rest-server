//------------SETTINGS---------------

require('./config/config');
//Express
const express = require('express');
const app = express();
//Mongoose
const mongoose = require('mongoose');
//colors
const colors = require('colors');

const path = require('path');
//body parser
const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//hablitar public
app.use(express.static(path.resolve(__dirname, '../public')));
//--------------------------------------

//app uses user routes

app.use(require('./routes/index'));



//connect to database
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE'.green);
});

//Listen to port
app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto", process.env.PORT);
});