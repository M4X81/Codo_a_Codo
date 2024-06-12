/*
Vamos a crear un servidor estático Nativo
Es decir un software que a futuro funcionará desde el hardware 
del servidor y contestará
a las peticiones que realiza el cliente
*/

// 1- Creación del servidor estático
// 1.1- Crearemos una función (función expresada) se llama server, 
// esta función se activa ante una petición
// Su sintaxis tiene la forma
// const server = http.createServer(serverOptions, requestListener);

/*************************************************************************** 
 * Kit de la cuestion es completar debidamente la expresion
 * const server = http.createServer(OpcionesDelServidor, RespuestaPeticiones);
****************************************************************************/

//Importacion del módilo http
const http = require("http");

//Importamos el modulo nativo fs
const fs = require("fs");

//Declaramos un puerto
const PORT= 5171;

//Opciones del servidor
const serverOptions= {
    timeout: 30000
}

//segundo parametro funcion que maneja solicitudes y respuestas
const requestListener= function(req, res){
   //Utilizamos el módulo fs para leer el html
   const archivo = fs.readFileSync(__dirname + "/index.html"); 
   //dirname te provee de la ruta absoluta del arch q ponemos con ruta relativa

   //preparamos el objeto de cabecera, cargando meta-inf para la respuesta
   const cabecera = {
    'Content-Type': 'text/html; charset=UTF-8'
   }

   //configuracion del estado de la respuesta
res.writeHead(200, cabecera);

   //Envio del documento 
   res.end(archivo);
}

//Declaramos el servidor

const server = http.createServer(serverOptions, requestListener);

//Llamada al server
server.listen(PORT, function(){
    console.log(`Servidor escuchando el puerto: ${PORT}`);
});