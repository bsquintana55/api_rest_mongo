const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const conexionBD = require('./db.conexion');
//rutas
const rutaC = require('./rutas/rutaC')
const rutaA = require('./rutas/rutaA')
const rutaG = require('./rutas/rutaG')


const app = express()
const port= process.env.PORT || 3000;
//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name","api-hotelia");
app.set("port",process.env.port || 3500);

//Midlewares
app.use(express.json());
app.use(morgan("dev"));

//Llamado de rutas
app.use('/public', express.static('public/upload'));
//app.use('/public', express.static(__dirname + '/public'));
app.use("/api/habitaciones",rutasHabitacion);
app.use("/api/users",rutasUser);


module.exports=app;