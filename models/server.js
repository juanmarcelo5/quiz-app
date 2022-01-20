const express = require('express');
require('dotenv').config()
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        
        this.pahts = {
                auth: '/api/auth',
                question: '/api/question'
        }
    
      
        
        //conectar DB
        this.conectarDb();
        
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }
    
    async conectarDb(){
        await dbConection();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
        
        // Lectura y parseo del body
        this.app.use( express.json() );
        this.app.use(express.urlencoded({extended:true}))
    

        // Directorio Público
        this.app.use( express.static('public') );

        /* //FileUpload - carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        })); */

    }

    routes() {
        this.app.use( this.pahts.auth, require('../routes/auth'));
        this.app.use( this.pahts.question, require('../routes/question'));

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
