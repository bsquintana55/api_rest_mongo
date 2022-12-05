const {Schema,model}=require("mongoose");

const cancionSchema = new mongoose.Schema({
    _id:Number,
    nombreCancion: String,
    fechaGrabacion: Date,
    duracionCancion: String,
    estadoCancion: String
   
    
  });

 
  
  module.exports=model("Cancion",cancionSchema);