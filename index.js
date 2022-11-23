const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Holuuu');
  });
  
  app.post('/hola', function (req, res) {
    res.send('[POST]Saludos desde express');
  });
  app.get('/hola', function (req, res) {
    res.send('[GET]Saludos desde express');
  });



app.listen(4000, () => {
 console.log("El servidor está inicializado en el puerto 4000");
});

