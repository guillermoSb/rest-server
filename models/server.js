const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();   // Create the express app
        // eslint-disable-next-line no-undef
        this.port = process.env.PORT;
        // Paths
        this.usersPath = '/api/users';
        // Middlewares
        this.middlewares(); // Init Middlewares
        this.routes();  // Init the routes
    }

    middlewares() {
        this.app.use(cors());    // CORS
        this.app.use(express.json()); // Parser for JSON
        this.app.use(express.static('public')); // Public Dir
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;