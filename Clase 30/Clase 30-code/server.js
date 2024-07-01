/**
 * Objetivo: como manejar la subida de uno o varios archivos en una aplicacion
 * con el middleware "multer"
 * 1- Creamos el módulo o archivo multerConfig.js
 * 2- npm init -y. Configuramos el script con --watch
 * 3- npm install multer --save
 * 4- npm i express
 * 5- Codificamos el server.js
 * 6- Codificamos el modulo createDir.js
 * 7- Configuramos el modulo multerConfig.js
 * 8- Crear la carpeta /uploads
 * 9- Realizamos pruebas con postman
 */

//Importamos los módulos necesarios
const express = require("express");

//Importamos el módulo multer
const upload= require("./multerConfig");

//Importamos el módulo para crear carpeta Uploads
const createDir= require("./createDir");

//Creamos una instancia de express
const app= express();

//Declaramos el puerto
const PORT= 3000;

//Activamos la funcion create (para verificar que realmente exista) para guardar archivos recibidos
createDir();

//Definir la ruta ppal 
//los parametros son: 
//1 la ruta. 
//2-desde donde extraemos(boton o lo q sea)los datos que vamos a traer. single determina q es un solo archivo, y el string es el nombre
//3funcion de flecha
app.post("/upload", upload.single("archivo"),(req, res)=>{
  // Si algo sale mal
  if (!req.file) {
    // Si no hay ningún archivo subido, devuelve un error.
    return res.status(400).send("Error al subir el archivo.");
  }
  // Si el archivo se ha subido correctamente, devuelve un mensaje de éxito.
  res.status(200).send("Archivos subidos exitosamente.");
})

//para recibir mas de un archivo
app.post("/uploads", upload.array("archivos", 10), (req, res)=>{
      // Si algo sale mal
  if (!req.files) {
    // Si no hay ningún archivo subido, devuelve un error.
    return res.status(400).send("Error al subir el/los archivos.");
  }
  // Si el archivo se ha subido correctamente, devuelve un mensaje de éxito.
  res.status(200).send("Archivos subidos exitosamente.");
})

//Inicializamos
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto: ${PORT}`);
})