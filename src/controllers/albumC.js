const album = require("../models/album");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const album = await album.find();
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json(error)
  }

}

exports.obtenerid = async (req, res) => {
    try {
      const _idAlb = req.params._idAlb;
      const album = await album.findById(_idAlb);
      res.status(200).json(album);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.add = async (req, res) => {
    try {
  
      //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
      const nAlbum = new album(req.body)
      console.log(req.file);

     
      await nAlbum.save();
      console.log(nAlbum);
      //res.json({ msj: "Usuario registrado exitosamente", id: nAlbum._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

exports.edit = async(req, res) => {
    try {
      const _idAlb = req.params._idAlb;
      const nAlbum = new album(req.body,req.file)
      console.log(req.file);

      
      const cambioUsuario = await album.findByIdAndUpdate(_idAlb, nAlbum);
      res.json({ msj: "el album fue actualizado exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }
