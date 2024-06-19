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

/*GESTION DEL ARCHIVO DE FORMATO JSON */
//3-Importacion del modulo de lectura FS
const fs = require("fs");

//4-importamos el modulo path( esto nos ayuda con el problema de las rutas relativas y absolutas)
const path = require("path");

//5-utilizacion de path.join(para normaliar la ruta rel de .json)
const moviesPath = path.join(__dirname, "../public/movies.json");

//6-leemos y formateamos el archivo .json
const archivoJSON = fs.readFileSync(moviesPath, "utf-8");

//7-convertir .json a un array legible por js(objeto)
const movies = JSON.parse(archivoJSON);
/*FIN DE LA GESTION DEL ARCHIVO */

//8- DEFINICION DE LAS SOLICITUDES
//8.1 -pueba con solicitud GET /movies/saludo

router.get("/saludo",
    (req, res) => {
        res.json({ mensaje: "Hola desde la ruta de movies" });
    });
//8.2- obtenemos el listado completo
router.get("/list",
    (req, res) => {
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

//9- Solicitudes del tipo POST
// Una solicitud del tipo POST se utiliza para crear un nuevo recurso en el servidor. 
// En este caso recibimos una solicitud dentro de req

router.post("/",
    (req, res) => {

        //Creamos un objeto con los datos del cuerpo de la solicitud
        const nuevaPeli = {
            id: movies.length + 1,
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            image: req.body.image
        }
        //Agregamos nueva peli al array movies
        movies.push(nuevaPeli);

        //COnvertir array movies a formato JSON
        const moviesActualizado = JSON.stringify(movies, null, 2);
        // los 3 parametros son la constante, una funcion y el tercero es un valor de formato 

        //Guardamos el array en movies.json
        fs.writeFileSync(moviesPath, moviesActualizado, "utf-8");

        // toda esta funcion no tiene return ( vcamos a dar un mensaje como para ver q funciona)

        //enviamos un mensaje de exito
        res.status(201).json({
            mensaje: "Pelicula agregada con exito",
            pelicula: nuevaPeli
        });
    });

//10- Actualizamos datos mediante PUT (el put modifica, el post carga obj completo)
router.put("/:id",
    (req, res) => {
        //Buscamos la peli con el id solicitado
        const peliActualizada = movies.find(m => m.id === parseInt(req.params.id))

        // Si no se encuentra la película
        if (!peliActualizada) {
            // Variable estado 404
            const estado404 = res.status(404);
            // Valor de retorno
            return estado404.send("Película no encontrada");
        }
        //Proceso de modificacion
        peliActualizada.title = req.body.title || peliActualizada.title;
        peliActualizada.director = req.body.director || peliActualizada.director;
        peliActualizada.year = req.body.year || peliActualizada.year;
        peliActualizada.image = req.body.image || peliActualizada.image;

        //Convertir array movies a formato JSON
        const peliculasActualizadasJSON = JSON.stringify(movies, null, 2);//error
        // los 3 parametros son la constante, una funcion y el tercero es un valor de formato 

        //Guardamos el array en movies.json
        fs.writeFileSync(moviesPath, peliculasActualizadasJSON, "utf-8");

        // Respondemos enviando la peli actualizada
        res.json(peliActualizada);
    });





//Exportamos el modulo
module.exports = router;