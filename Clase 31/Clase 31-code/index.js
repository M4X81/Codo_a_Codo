/**
 * El objetivo de este trabajo 
 * es proporcionar una práctica introductoria 
 * para el desarrollo de autientificación de usuarios 
 * utilizando Node.js y los frameworks Express, Bcrypt y JsonWebToken.
 * Aplicamos los siguientes pasos
 * 1- Diseñamos la estructura de carpetas
 * 2- Inicializamos NPM: npm init -y
 * 3- Instalamos las dependencias: npm i express bcryptjs jsonwebtoken router
* 4- Configuramos el servidor en index.js
 * 5- Configurar start
 * 6- Para compatibilizar con un front de puerto 5000 importar cors
 */

//Importamos express
const express = require("express");

//Creamos instancia de express
const app = express();

//FUTURA CONEXION CON FRONT

//Importamos modulos propios
const authRoutes = require("./routes/authRoutes");

//Definimos puerto
const PORT = 3000;

//MIDDLEWARE DE CONEXION DE PUERTOS DIFERENTES

//Middleware para analizar Json entrantes
app.use(express.json());

//Codificar la ruta ppal
app.use("/auth",authRoutes);

//Inicializamos el server
app.listen(PORT, ()=>{`Servidor escuchando en el puerto: ${PORT}`});

//Pasamos a config