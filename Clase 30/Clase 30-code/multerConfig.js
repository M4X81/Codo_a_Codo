/**
 * MULTER es un middleware de Node.js 
 * para manejar la subida de archivos.
 * En general se usa con express y 
 * facilita la gestión de archivos recibidos 
 * en peticiones HTTP.
 */

//Importamos el modulo de multer
const multer = require("multer");

//Importamos path
const path = require("path");

//Configuramos el almacernamiento del archivo en nuestro disco/servidor( en nuestro caso ahora local)
const storage = multer.diskStorage({
    //las func cargan 3 parametros
    //cb es de callback pero lo paso como parametro de otra funcion que declaro dentro de la flecha
    destination: (req,file,cb)=>{
        //cb carga 2 parametros uno q hace ref a la activacion de algo( en este caso null) puede ser un error o algo similar
        //y en el segundo la dir de la carpeta donde voy a guardar lo que subo
        cb(null,"uploads/")
    },
    filename: (req, file, cb)=>{
       //el 2do param utilizo asi para que no se creen 2 iguales y tomo fecha mas ruta en nombre
        cb(null, Date.now()+path.extname(file.originalname));
    }
});

//configuramos la instancia de multer
//(extension, cantidad, tamaño de archivos etc)
// Crea una instancia de 'multer' con la configuración de almacenamiento definida.
// 'storage' es el almacenamiento configurado que hemos definido previamente.
// Configura la instancia de Multer con opciones adicionales.

const upload = multer({
    //aca se setean los datos. tiene 3 parametros
    //configuracion del almacenamiento
    storage:storage,
    //conf de archivos
    fileFilter:(req,file,cb)=>{
        // Define los tipos de archivos permitidos usando una expresión regular.
      const filetypes = /jpeg|jpg|png|bmp|gif/;
        // Verifica si el tipo MIME del archivo es uno de los permitidos.
      const mimetype = filetypes.test(file.mimetype);
      // Verifica si la extensión del archivo es una de las permitidas.
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      // Si ambos, tipo MIME y extensión del archivo, son permitidos, acepta el archivo.
      if (mimetype && extname) {
        return cb(null, true);
      } else {
        // Si el archivo no es permitido, devuelve un error.
        cb('Error: Tipo de archivo no soportado');
      }
    },
    //límite del tamaño de archivo
    limits: {fileSize:1000000}, //va en kb la unidad
});

//Exportamos el modulo
module.exports = upload;