'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas en express
app.use('/api', api);
//Ruta de tipo get. Recibe ruta y una función de callback en la que se hace la funcionalidad
//de la ruta el cual recibe la request (lo que recibe) y la respuesta (lo que devuelve)


//Recibir parámetro por url: /prueba/:nombre, el cual lo hace obligatorio
//En cambio si tiene un "?" al final lo pone opcional


module.exports = app;
