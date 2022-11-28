const mongoose = require('mongoose');
const conexionBD=async()=>{
    const url_disq = 'mongodb+srv://solq44:sol44q@cluster0.hx2oziu.mongodb.net/disquera'
    try{
        const DB=await mongoose.connect(url_disq);
        console.log("Conexión satisfactoria", DB.connection.name);
    }
    catch(  error){
        console.log(error);
    }
}
module.exports=conexionBD;