const {Schema,model}=require("mongoose");

const albumSchema = new mongoose.Schema({
    _id:Number,
    nombreAlbum: String,
    anioPublicacion: String,
    estadoAlbum: String,
    
    cancion:[{
      type:Schema.Types.ObjectId,
      ref:'cancion'
    }]
  

  });

 
  //ese "" es el que se llama en los controladores 
  module.exports=model("Album",albumSchema);