'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();

//Ruta de tipo get. Recibe ruta y una función de callback en la que se hace la funcionalidad
//de la ruta el cual recibe la request (lo que recibe) y la respuesta (lo que devuelve)
api.get('/prueba/:nombre?', FavoritoController.prueba);
api.get('/favorito/:id', FavoritoController.getFavorito);
api.post('/favorito', FavoritoController.saveFavorito);
api.put('/favorito', FavoritoController.updateFavorito);
api.delete('/favorito/:id', FavoritoController.deleteFavorito);
api.get('/favoritos', FavoritoController.getFavoritos);

//Recibir parámetro por url: /prueba/:nombre, el cual lo hace obligatorio
//En cambio si tiene un "?" al final lo pone opcional

module.exports = api;
