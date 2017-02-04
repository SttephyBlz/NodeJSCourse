'use strict'

function prueba(req, res){

  if(req.params.nombre){
    var nombre = req.params.nombre;
  }else{
    var nombre = "sin nombre"
  }

  res.status(200).send({
    data: [2,3,4],
    texto: "Hola mundo con NodeJs y Express "+nombre
  });
}

module.exports = {
  prueba 
}
