//-------------
// PUERTO
//-------------
process.env.PORT = process.env.PORT || 3000;
//-------------
// Entorno
//-------------
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//-------------
// Database
//-------------
let urlDb;
if (process.env.NODE_ENV == "dev") {
    urlDb = 'mongodb://localhost:27017/cafe';
} else {
    urlDb = "mongodb://guillermoSb:Sibeba0206@ds133642.mlab.com:33642/cafe"
}
process.env.URLDB = urlDb;