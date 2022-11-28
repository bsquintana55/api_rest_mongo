require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');


app.use('/cancion', routes)



try {
    mongoose.connect(
        "mongodb://localhost:27017/Disquera",
        {
            //opciones de seguridad 
            useNewUrlParser: true,
            //devolvera de una manera especifica las respuestas que se encuentran ahí
            useUnifiedTopology: true
        }
    )
        .then(() => console.log("conecccion de DB realizada!"));
} catch (error) {
    console.log(error);
}

const app = express();

app.use(express.json());

app.listen(4000, () => {
    console.log(`Servidor conectado en ${4000}`)
})