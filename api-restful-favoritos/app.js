'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
  //Configurar headers
  //Cualquiera puede hacer peticiones.
  res.header('Access-Control-Allow-Origin', '*');
  //Cabeceras
  res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
  //Que nos pueden llegar
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  //Los permitidos
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  //Para salir
  next();
});

//Rutas en express
app.use('/api', api);


module.exports = app;
