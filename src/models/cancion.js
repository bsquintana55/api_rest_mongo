const {Schema,model}=require("mongoose");

const cancionSchema = new mongoose.Schema({
    _idCan:Number,
    nom_can: String,
    f_graba: Date,
    dura_can: String,
    _idAlbFK: Number,
    estado_can: String
    
  });

 
  
  module.exports=model("Cancion",cancionSchema);