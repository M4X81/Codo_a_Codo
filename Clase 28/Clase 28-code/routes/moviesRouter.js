/**
 * Router: Un router en Express es una manera de agrupar rutas relacionadas.
 * Es como un mini-servidor dentro del servidor principal.
 * Ayuda a organizar el código cuando tienes muchas rutas.
 * Cuando accedes a '/movies/sub_ruta' en tu navegador
* o herramienta como Postman, la aplicación:
 * Primero busca la ruta '/movies' en el archivo principal (server.js).
 * Luego delega el manejo de esa ruta al router moviesRouter.
 * Finalmente, dentro de moviesRouter, encuentra la subruta '/list'
 * y ejecuta la función correspondiente que devuelve "sub_ruta".
 */

//1- importamos el modulo express
const express = require("express");

//2- Instanciamos el router de express
const router = express.Router();

//3-Importacion del modulo de lectura FS
const fs= require("fs");

//4-importamos el modulo path( esto nos ayuda con el problema de las rutas relativas y absolutas)
const path = require("path");

//5-utilizacion de path.join(para normaliar la ruta rel de .json)
const moviesPath = path.join(__dirname, "../public/movies.json");

//6-leemos y formateamos el archivo .json
const archivoJSON = fs.readFileSync(moviesPath, "utf-8");

//7-convertir .json a un array legible por js(objeto)
const movies = JSON.parse(archivoJSON);

//8- definicion de las solicitudes
//8.1 -pueba con solicitud GET /movies/saludo

router.get("/saludo",
    (req, res)=>{
        res.json({mensaje: "Hola desde la ruta de movies"});
    });
//8.2- obtenemos el listado completo
router.get("/list", 
    (req , res)=>{
        res.json(movies);
    });

/// 8.3 - Rutas paramétricas con id
router.get("/:id", (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));

    // Si no se encuentra la película
    if (!movie) {
        // Variable estado 404
        const estado404 = res.status(404);
        // Valor de retorno
        return estado404.send("Película no encontrada");
    }

    // Enviamos la película encontrada
    res.json(movie);
});


//Exportamos el modulo
module.exports= router;