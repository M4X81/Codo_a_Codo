/** Organización del código:
 * El código en JS se puede estructurar en las secciones generales:
 * 1. Comentarios de la cabecera.
 * 2. Importación de librerías externas.
 * 3. Importación de módulos locales.
 * 4. Definición de variables globales.
 * 5. Declaración de funciones.
 * 6. Ejecución principal del código, procesos.
 * 7. Resultados. 
 */

/* ***INSTRUCCIONES DE SALIDA*** */

// Instruccionde salida por consola

console.log("Hola mundo");
console.log(3+4);

//Funcion Alert

alert("Hola, abriste tu navegador");

// Directiva document.write()

document.write("<h1> Hola Mundo, este es un mensaje desde Js</h1>");

//Tipos de variables

//Variables var
// console.log(miVar); esto es ppio de hoisting(cuando se llama una variable aun no declarada)

var miVar = 10.56;
var miVar = 5; //esto no es una buena practica la redeclaracion de variables

console.log(miVar);

//Variable let
//Declaracion e inicializacion de las variables

// console.log(miVar2);
let miVar2 = 30;
//no tienen ppio de hoist

miVar2 = 45; //reasignacion ( no redeclaracion)de variable
console.log(miVar2);

//Tipos de constantes van todo en mayusculas

const PI = 3.14;//no permite cambios de valores a posteriori
// PI= 5.13;

console.log("El valor de la constante PI es: " + PI);