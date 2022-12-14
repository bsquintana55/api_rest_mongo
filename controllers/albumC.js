const album = require("../models/album");
const genero = require("../models/genero");
const jwt=require("jsonwebtoken");

//
exports.obtener = async (req, res) => {
  try {
    const album = await album.find().populate('genero',{

      "_id":1,
    "nombreGenero": 1,
    "estadoGenero": 1

    });
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json(error)
  }

}
  //get id
exports.obtenerid = async (req, res) => {
    try {
      const _id = req.params._id;
      const album = await album.findById(_id).populate('genero',{

      "_id":1,
      "nombreGenero": 1,
      "estadoGenero": 1
  
      });
      res.status(200).json(album);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  //registrar
  exports.add = async (req, res) => {
    try {
  
       const {
      _id,
      nombreAlbum,
      anioPublicacion,
      estadoAlbum,
      generoId
      } = new req.body;
      //console.log(req.file);
      const genero=await genero.findById(generoId);
      console.log(genero._id);

      const nAlbum = new album({
      _id,
      nombreAlbum,
      anioPublicacion,
      estadoAlbum,
      genero: genero._id
        
      })
      
      try{
        const saveAlbum=await nAlbum.save();
        genero.album=genero.album.concat(saveAlbum._id);
        await genero.save();

        console.log(saveAlbum)
        res.status(200).json(saveAlbum);
      }catch (error) {
        res.status(500).json({msj:"Error al registrar"+error})
      }




      //res.json({ msj: "Usuario registrado exitosamente", id: nAlbum._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

exports.edit = async(req, res) => {
    try {
      const _id = req.params._id;
      const nAlbum = new album(req.body,req.file)
      console.log(req.file);

      
      const cambioAlbum = await album.findByIdAndUpdate(_id, nAlbum);
      res.json({ msj: "el album fue actualizado exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }