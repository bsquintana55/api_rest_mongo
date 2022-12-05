const {Schema,model}=require("mongoose");

const generoSchema = new mongoose.Schema({
    _id:Number,
    nombreGenero: String,
    estadoGenero: String,
    estadoGenero:[{
      type:Schema.Types.ObjectId,
      ref:'genero'
    }]

  });

 
  //ese "" es el que se llama en los controladores 
  module.exports=model("Genero", generoSchema);