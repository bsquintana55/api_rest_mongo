const mongoose = require('mongoose');
const conexionBD=async()=>{
    
    try{
        const DB=await mongoose.connect('');
        console.log("Conexión satisfactoria",DB.connection.name);
    }
    catch(  error){
        console.log(error);
    }
}

module.exports=conexionBD;