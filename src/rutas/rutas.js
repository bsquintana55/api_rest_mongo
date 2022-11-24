const routes = require('./rutas/rutas');

const {Router}=require("express");

//rutas cancion
const rutasCancion=Router();
const ctrCan=require("../controllers/cancionC")

//rutas album
const rutasAlbum=Router();
const ctrAlb=require("../controllers/albumC")

//rutas genero
const rutasGenero=Router();
const ctrGen=require("../controllers/generoC")

const multer=require("multer");

const carga=multer({storage:rutaStorage});


//cancion
rutasCancion.get('/', ctrCan.obtener);

rutasCancion.get('/:id', ctrCan.obtenerid);

rutasCancion.post('/', ctrCan.add);
  
rutasCancion.put('/:id',ctrCan.edit);

//album

rutasAlbum.get('/', ctrAlb.obtener);

rutasAlbum.get('/:id', ctrAlb.obtenerid);

rutasAlbum.post('/', ctrAlb.add);
  
rutasAlbum.put('/:id', ctrAlb.edit);


//genero

rutasGenero.get('/', ctrGen.obtener);

rutasGenero.get('/:id', ctrGen.obtenerid);

rutasGenero.post('/', ctrGen.add);
  
rutasGenero.put('/:id', ctrGen.edit);




module.exports=rutasCancion;
module.exports=rutasAlbum;
module.exports=rutasGenero;


/*
const express = require('express');

const router = express.Router()

module.exports = router;


Publicación de datos en la base de datos.
Obtener todos los datos de la base de datos.
Obtención de datos en base al DNI.
Actualización de datos en base al DNI.
Eliminación de datos en función del ID. 


//Post Method
router.post('/crear', (req, res) => {
    res.send('Post API')
})

//Get all Method
router.get('/traer', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/taer1/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/actu/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/eliminar/:id', (req, res) => {
    res.send('Delete by ID API')
})*/