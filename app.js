const express = require('express');

const morgan = require('morgan');
const conexionBD = require('./db_disquera');
//rutas
const rutaC = require('./rutas/rutaC');
const rutaA = require('./rutas/rutaA');
const rutaG = require('./rutas/rutaG');


const app = express()
require('dotenv').config()
//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name","api-disquera");
app.set("port",process.env.PORT || 3000);
app.set("host",process.env.HOST || 'localhost');

//Midlewares
app.use(express.json());
app.use(morgan("dev"));

//Llamado de rutas
app.use('/public', express.static('public/upload'));
//app.use('/public', express.static(__dirname + '/public'));
app.use("/cancion",rutaC);
app.use("/album",rutaA);
app.use("/genero",rutaG);


module.exports=app;