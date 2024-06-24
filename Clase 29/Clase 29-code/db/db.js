/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta con la base de datos. 
 * Esa conexión utilizará el objeto mysql provisto en en el módulo mysql2
 */

//1- Importamos el modulo mysql2
const mysql = require("mysql2");

//2- Configuracion de la conexion
const connection = mysql.createConnection({
    host: "localhost", //porque estamos haciendo local
    user: "root",
    password: "root",
    port: 3306
   // database:"movies_db" ( cuando la solicitamos genera conflicto, una vez creada ya esta)
});

//generamos la conexion
connection.connect((err)=>{
    //en caso de error
    if (err) {
        console.log("Error de conexión con el servidor: " + err);
        return;}
   
        //En caso de conectar bien
    console.log("Estado de conexión: CONECTADO");
    
    //consulta sql
    const sql = 'CREATE DATABASE IF NOT EXISTS movies_db';
    
    //verificamos y creamos la db
    connection.query(sql, (error, results)=>{
        //si hay error
        if (err) {
            console.error('Error al crear la base de datos:', err);
            return;
        }
        //si se crea bien
        console.log("Base de datos: CREADA/EXISTENTE/GARANTIZADA"); 
        
        //Nos ubicamos en la base de datos y generamos las tablas
        connection.changeUser({database: "movies_db"}, (err)=>{
            //error
            if (err) {
                console.error('Error al cambiar a la base de datos movies_db:', err);
                return;
            }
            //en caso de ok
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS movies (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    director VARCHAR(255) NOT NULL,
                    year INT NOT NULL
                );
            `;
            //pasamos la consulta a la bd
            connection.query(createTableQuery, (err, results)=>{
                //error
                if (err) {
                    console.error('Error al crear la tabla:', err);
                    return;
                }
                //exito
                console.log("Tabla: CREADA/EXISTENTE/GARANTIZADA");
            })
        })
    })
})

//eXPORTACION DEL MODULO
module.exports= connection;