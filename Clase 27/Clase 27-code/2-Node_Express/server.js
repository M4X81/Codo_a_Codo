/**
 * Crearemos un servidor con el módulo express
 * 1- npm init -y
 * 2- npm install express --save
 * 3- Avanzamos con el código del servidor
 **/

//1-Importamos el modulo express
const express = require("express");

//2- Instanciamos el objeto express
const app = express();

//3- Declaración del puerto
const PORT= 5171;

//4-Utilizamos el método .get para gestionar la devolución de llamadas(solicitudes)
app.get("/miRuta", function(req, res){
res.send("Hola comisión, soy un mensaje en respuesta a la petición/ruta");
});

//5- Inicialización del server
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando el puerto: ${PORT}`);
})