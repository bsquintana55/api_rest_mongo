const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const conexionBD = require('../src/db_disquera');
//rutas
const rutaC = require('../src/rutas/rutaA')
const rutaA = require('../src/rutas/rutaC')
const rutaG = require('../src/rutas/rutaG');
const rutasAlbum = require('../src/rutas/rutaA');
const rutasCancion = require('../src/rutas/rutaC');
const rutasGenero = require('../src/rutas/rutaG');


const app = express()
const port= process.env.PORT || 3000;
//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name","api-disquera");
app.set("port",process.env.port || 3500);

//Midlewares
app.use(express.json());
app.use(morgan("dev"));

//Llamado de rutas
app.use('/public', express.static('public/upload'));
//app.use('/public', express.static(__dirname + '/public'));
app.use("/disquera/album",rutasAlbum);
app.use("/disquera/cancion",rutasCancion);
app.use("/disquera/genero",rutasGenero);

module.exports=app;