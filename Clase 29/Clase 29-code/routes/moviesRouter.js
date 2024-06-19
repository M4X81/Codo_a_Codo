/**
 * Enrutador 
 * Endpoints
 */

//1- Importamos el modulo express
const express = require("express");

//2- Instanciamos Router de express ( este maneja los get, post etc)
const router= express.Router();

//3- Importamos el controlador de funciones movieController (este controla las acciones)
const movieController = require("../controllers/movieController");

//4- Planteamos las solicitudes GET, POST, PUT, DELETE
//ruta del listado general
router.get("/", movieController.getAllMovies) // esta parte"/" lo manejamos nosotros, si queremos podemos poner "/loquesea"
// ruta para consultas parametricas
router.get("/:id", movieController.getMovieById);
// ruta para crear peliculas
router.post("/create", movieController.createMovie);
// ruta para actualizar
router.put("/:id", movieController.updateMovie);
//ruta para borrar
router.delete("/:id", movieController.deleteMovie);

//5- Exportamos el modulo
module.exports = router;

//6- Pasamos a movieController