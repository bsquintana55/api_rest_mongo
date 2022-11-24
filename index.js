const express = require('express');
const mongoose = require('mongoose');

const app = express();
//
require('dotenv').config();

database_url = mongodb://localhost:27017/albumes
const mongoString = process.env.database_url







app.listen(4000, () => {
    console.log(`servidor encendido puerto ${4000}`)
})
