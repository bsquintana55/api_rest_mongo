const genero = require("../models/genero");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const genero = await genero.find();
    res.status(200).json(genero);
  } catch (error) {
    res.status(500).json(error)
  }

}

exports.obtenerid = async (req, res) => {
    try {
      const _id = req.params._id;
      const genero = await genero.findById(_id);
      res.status(200).json(genero);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.add = async (req, res) => {
    try {
  
      //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
      const nGenero = new genero(req.body)
      console.log(req.file);

     
      await nGenero.save();
      console.log(nGenero);
      //res.json({ msj: "Usuario registrado exitosamente", id: nGenero._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

exports.edit = async(req, res) => {
    try {
      const _id = req.params._id;
      const nGenero = new genero(req.body,req.file)
      console.log(req.file);

      
      const cambioGenero = await genero.findByIdAndUpdate(_id, nGenero);
      res.json({ msj: "el genero fue actualizado exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }