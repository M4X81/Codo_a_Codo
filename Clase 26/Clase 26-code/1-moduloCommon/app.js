// 1- Importamos el módulo planteado
// import { sumar } from "./miModulo"; revisar esto
const operaciones = require("./miModulo");

//probamos la función dentro de una constante
const prueba1 = operaciones.sumar(2,3);
const prueba2 = operaciones.restar(10,5);

//resultado por consola
console.log(prueba1);
console.log(prueba2);
