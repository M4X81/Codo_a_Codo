/**
 * Punto principal de acceso al servidor
 */

//1- Importamos express
const express = require("express");

//2- Instanciamos express
const app = express();

//3- Importamos modulo de las rutas
const movieRoutes = require("../routes/moviesRouter");

//4- Declaramos el puerto
const PORT = 3000;

//5- Transformacion del body a formato legible con el middleware
app.use(express.json());

//6- Prefijo principal de las rutas
app.use("/movies" , movieRoutes);

//7- Inicializacion del servidor
app.listen(PORT, 
    ()=>{
console.log(`Servidor escuchando el puerto : ${PORT}`);
    });

    //8- Pasamos a moviesRouter