const cancion = require("../models/cancion.js");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const cancion = await cancion.find();
    res.status(200).json(cancion);
  } catch (error) {
    res.status(500).json(error)
  }

}

exports.obtenerid = async (req, res) => {
    try {
      const _idCan = req.params._idCan;
      const cancion = await cancion.findById(_idCan);
      res.status(200).json(cancion);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.add = async (req, res) => {
    try {
  
      //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
      const nuevaCancion = new cancion(req.body)
      console.log(req.file);

     
      await nuevaCancion.save();
      console.log(nuevaCancion);
      //res.json({ msj: "Usuario registrado exitosamente", id: nuevaCancion._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const nuevaCancion = new cancion(req.body,req.file)
      console.log(req.file);

      
      const cambioUsuario = await cancion.findByIdAndUpdate(id, nuevaCancion);
      res.json({ msj: "Cancion actualizada exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }
