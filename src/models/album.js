const {Schema,model}=require("mongoose");

const albumSchema = new mongoose.Schema({
    _id:Number,
    nombreAlbum: String,
    anioPublicacion: String,
    estadoAlbum: String

  

  });

 
  //ese "" es el que se llama en los controladores 
  module.exports=model("Album",albumSchema);