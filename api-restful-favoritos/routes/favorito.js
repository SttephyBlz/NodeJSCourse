'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();

//Ruta de tipo get. Recibe ruta y una función de callback en la que se hace la funcionalidad
//de la ruta el cual recibe la request (lo que recibe) y la respuesta (lo que devuelve)
api.get('/prueba/:nombre?', FavoritoController.prueba);

module.exports = api;
