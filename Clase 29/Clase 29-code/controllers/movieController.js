/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos
 * .getAllMovies
 * .getMovieById
 * .createMovie
 * .updateMovie
 * .deleteMovie
 */

//1- Importamos el modulo db
// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const { error } = require("console");
const db = require("../db/db");

//2- getAllMovies
const getAllMovies = (req, res)=>{
    const sql = "SELECT * FROM movies";
    //enviamos la consulta a la base de datos
    db.query(sql, (error, results)=>{
        //si sucede un error
        if (error) {
            throw error
        };
        //si todo sale bien
        res.json(results)
    });
};

//3- getoviesById
const getMovieById= (req,res)=>{
    //obtenemos el id solicitado
    // Tomamos la solicitud y extraemos su id
    // Esta es una notacion de desestructuración {id}
    const {id}= req.params;
    //consulta a la bbdd
    const sql = 'SELECT * FROM movies WHERE id = ?'

    // enviamos la consulta
    db.query(sql, [id], (error,results)=>{
             //si sucede un error
             if (error) {
                throw error
            };
            //si todo sale bien
            res.json(results);
    });    
}

//4- create
 const createMovie = (req,res)=>{
    //Desestructuramos la request
    const {title,director,year}= req.body;

    // creamos la consulta
    const sql = 'INSERT INTO movies (title, director, year) VALUES (?, ?, ?)';
    // Pasar la consulta
    db.query(sql, [title,director,year], (error,results)=>{
            //si sucede un error
            if (error) {
                throw error
            };
            //si todo sale bien
            res.json({mensaje: "Pelicula creada"});
    })
 }