const express = require("express")
var cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.userPath = '/api/users';
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares () {

        // Cors
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() )

        //Directorio publico
        this.app.use( express.static('public') );
    }

    routes () {
        this.app.use(this.userPath,require('../routes/users'));

    }

    listen () {
        this.app.listen(this.port);
    }
}


module.exports = Server;