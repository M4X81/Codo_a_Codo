/** 
En el siguiente práctico crearemos un módulo que contenga una función 
que pueda ser exportada, mediante codigo commonJS 
*/

//Creamos una función que resuelve una suma
function sumar(a,b) {
    //cuerpo de la función
    return a+b;  
}
function restar(a,b) {
    //cuerpo de la función
    return a-b;  
}



// Exportamos el módulo
 module.exports = {sumar,restar};