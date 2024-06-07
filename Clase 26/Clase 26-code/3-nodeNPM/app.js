/**
 * Objetivo: Familiarizarse con npm y el uso de paquetes npm en proyectos 
 * de Node.js.
 * 1- Inicializar un proyecto Node.js mediante npm init-y
 * 2- Vamos a instalar un paquete npm muy simple llamado lodash, 
 * npm install lodash
 * 3- Crea un archivo app.js importamos lodash 
 * y utilizamos la funcion random para obtener un número matemático
*/

console.log("Hola");
//1-Importamos lodash y lo utilizamos

const lodash = require("lodash");
//prueba de números random
console.log(lodash.random(0,100));

//convertimos una frase a camel case
let txt = "Hola Mundo la reputa madre";
console.log(lodash.camelCase(txt));

// colocar una letra capital
let txt2= "HOLA MUNDO";
console.log(lodash.capitalize(txt2));

//pasar un String a kebab case
console.log(lodash.kebabCase(txt));
