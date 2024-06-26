/**
 * Router: Un router en Express es una manera de agrupar rutas relacionadas. 
 * Es como un mini-servidor dentro del servidor principal. 
 * Ayuda a organizar el código cuando tienes muchas rutas.
 */

/**
 * Objetivo: crear un servidor que responda a consultas de peliculas
 * 1- Creamos la estructura del proyecto con un enrutador.
 * 2- Creamos los archivos 'server.js', '/routes/movieRouter.js', '/public/movies.json'
 * 3- npm init -y. Configuramos el script con --watch
 * 4- npm install express --save
* 5- Codificamos en orden:
 * 5.1- Codificamos el server
 * 5.2- Codificamos el router  
 */

//1-Importamos el modulo express
const express = require("express");

//2- Instanciamos el objeto express
const app = express();

//3- Declaramos el puerto
const PORT= 5171;

//4-Llamamos al modulo propio(lo realizaremos a futuro)
const moviesRouter = require("./routes/moviesRouter");

//5- Uso del middleware express.json
// Este middleware nos permite analizar los cuerpos 
// de las solicitudes entrantes con formato JSON 
// se encarga de convertir el cuerpo de la solicitud 
// en un objeto JavaScript accesible a través de req.body.

app.use(express.json());

// // Middleware to log headers
// app.use((req, res, next) => {
//     console.log('Headers:', req.headers);
//     next();
//   });

//6-Definimos el prefijo principal de la ruta
app.use("/movies", moviesRouter);

//7-Inicializamos al servidor
app.listen(PORT, 
    ()=>{
console.log(`Servidor escuchando el puerto : ${PORT}`);
    });
//8- Pasasmos a configurar moviesRouter.js