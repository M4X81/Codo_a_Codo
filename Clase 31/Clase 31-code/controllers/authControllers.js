/***
 * El controlador de autenticación maneja las solicitudes 
 * de registro e inicio de sesión de los usuarios. 
 * Realiza las siguientes funciones principales:
 * Registro de usuario (register) :Recibe los datos del usuario, 
 * cifra la contraseña, almacena el usuario en el array de usuarios, 
 * genera un token JWT y lo envía como respuesta.
 
* Inicio de Sesión (login): Verifica las credenciales del usuario, 
 * genera un token JWT si las credenciales son correctas 
 * y lo envía como respuesta.
 */

//Importamos JWT
const jwt = require("jsonwebtoken");

//Importamos bcryptjs
const bcrypt = require("bcryptjs"); 

//Importamos el modulo propio userModels
const users = require("../models/userModels");

//Importamos la configuracion del token
const config = require("../config/config");

//Generamos una funcion que nos permita registrar a los usuarios
const register = (req, res)=>{
    //via request y dentro del body recibimos los datos del usuario
    //Desestructuracion
    const {username, password}= req.body;

    //Cifrar la contraseña y almacenamos en db( en este caso en array local)
    const hashedPassword = bcrypt.hashSync(password, 8);//aca el 8 vendria a ser un "salt" que en este caso haria una potencia de la cantidad de hasheos que se le harian ( o sea 256 hash)
    // 8 rondas es decir aplica la funcion hash 2^8 (256) veces

    //Creamos un obj con los datos del usuario
    const newUser = { id: users.length + 1, username, password: hashedPassword };

    //Agregamos el usuario al array o enviariamos a la db
    users.push(newUser);

    //Generamos un token con el metodo .sign carga 3 parametros
    const payload = { id: newUser.id, username: newUser.username}; 
    const secretKey = config.secretKey; // lo traemos del archivo config
    const options = { expiresIn: config.tokenExpiresIn } // parámetro opcional

    //Generamos el token
    const token = jwt.sign(payload, secretKey, options);

    //Enviamos el mensaje del token como respuesta del cliente
    res.status(201).send({auth: true, token});
};

