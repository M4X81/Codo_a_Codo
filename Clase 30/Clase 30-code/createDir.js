/*
  * Módulo que valida y/O crea la carpeta de subida
  */

//Importamos módulos
const fs = require("fs");
const path = require("path");

// Verifica si la carpeta 'uploads' existe, y si no, créala.
function createDir() {
    //path.join normaliza la direccion absoluta de los archivos o carpetas
    const uploadsDir = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }
  // existsSync(): Es un método del módulo fs que verifica si un archivo o directorio existe 
  // uploadsDir: Es la ruta al directorio
  // mkdirSync(): Es otro método del módulo fs que crea un directorio de manera sincrónica.
}

//Exportamos el modulo para utilizarlo en server.js
module.exports = createDir;