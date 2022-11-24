require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const url_mongo = process.env.DISQ_URL;
//console.log(url_mongo)

mongoose.connect(url_mongo);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('base de datos disq conectada');
})

app.use('/cancion', routes)




const app = express();

app.use(express.json());

app.listen(4000, () => {
    console.log(`Servidor conectado en ${4000}`)
})