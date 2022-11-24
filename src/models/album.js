const {Schema,model}=require("mongoose");

const albumSchema = new mongoose.Schema({
    _idAlb:Number,
    nom_alb: String,
    a_graba: Date,
    _idGenFK: Number,
    estado_alb: String

  });

 
  //ese "" es el que se llama en los controladores 
  module.exports=model("Album",albumSchema);