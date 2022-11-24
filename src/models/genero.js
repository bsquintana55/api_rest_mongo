const {Schema,model}=require("mongoose");

const generoSchema = new mongoose.Schema({
    _idGen:Number,
    nom_gen: String,
    estado_gen: String

  });

 
  //ese "" es el que se llama en los controladores 
  module.exports=model("Genero", generoSchema);