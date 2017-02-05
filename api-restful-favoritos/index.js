'use strict'

var mongoose = require('mongoose'); //Mongoose
var app = require('./app');//para poder usar express
var port = process.env.PORT || 3678; //Toma el puerto por el cual va a escuchar

//Linkear mongoose con mongodb
//Mongodb tiene el puerto por defecto 27017
mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err, res)=>{
  if(err){
    throw err;
  }else{
    console.log('Conexión a MongoDB correcta');
    //Servidor web; Parametros: Puerto 3678, callback
    app.listen(port, function() {
      //Comprobar que si está funcionando el servidor
      console.log("API Rest Favoritos funcionando en http://localhost:"+port);
    });
  }
});



//A partir de aquí ya está jalando el servidor.
