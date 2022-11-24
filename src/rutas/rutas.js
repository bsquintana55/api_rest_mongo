const routes = require('./rutas/rutas');

const {Router}=require("express");
const rutasCancion=Router();
const ctrHab=require("../controllers/cancionC")
const multer=require("multer");




const carga=multer({storage:rutaStorage});



rutasCancion.get('/', ctrHab.obtener);

rutasCancion.get('/:id', ctrHab.obtenerid);

rutasCancion.post('/', ctrHab.add);
  
rutasCancion.put('/:id',ctrHab.edit);


module.exports=rutasCancion;


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