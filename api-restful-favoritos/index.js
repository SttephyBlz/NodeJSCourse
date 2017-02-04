'use strict'
var app = require('./app');//para poder usar express
var port = process.env.PORT || 3678; //Toma el puerto por el cual va a escuchar

//Servidor web; Parametros: Puerto 3678, callback
app.listen(port, function() {
  //Comprobar que si está funcionando el servidor
  console.log("API Rest Favoritos funcionando en http://localhost:"+port);
});

//A partir de aquí ya está jalando el servidor.
