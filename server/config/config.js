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
    urlDb = process.env.MONGO_URI;
}
process.env.URLDB = urlDb;


//-------------
// Vencimiento token
//-------------
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 60;
//-------------
// Seed
//-------------
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//======================
//Google client ID
//======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '339269529955-nm5fk6td79cgcm50veuhguas0hajksnr.apps.googleusercontent.com';