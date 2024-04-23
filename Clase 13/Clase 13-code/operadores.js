/* Operadores en JS */
 /* Utilizaremos los operadores en JS 
 * desarrollando los siguientes ejemplos:
 * Ejemplo de operaciones aritmeticas
 * Ejemplo de operadores de autoasignación
 * Ejemplo de operadores incrementales
 * Ejemplo de operadores relacionales
 * Ejemplo de operadores lógicos
*/

//Declaracion e inicializacion de las variables

let a=5;
let b=3;
let c=10;
let d= 2;
//ejemplo de operaciones aritmeticas

document.write("<h2>Operadores aritméticos</h2>");
document.write("El valor de a es : " + a +"<br>" + "El valor de b es : " + b +"<br>")
document.write()
document.write("Operador suma entre a y b " + (a+b)+"<br>");
document.write("Operador resta entre a y b " + (a-b)+"<br>");
document.write("Operador multiplicacion entre a y b " + (a*b)+"<br>");
document.write("Operador division entre a y b " + (a/b)+"<br>");

//Operadores de autoasignación
// a = a + 8; -->a+=8; 
// a = a + 10; -->a+=10;
// a = a * 2; --> a*=2;

document.write("<h2>Operadores de autoasignacion</h2>");
document.write("Operador de autoasignacion a= a+8 : " + (a+=8)+"<br>");
document.write("Operador de autoasignación a = a*2: "+(a*=2)+"<br><br><br><br><br><br>");
//hacer el resto de los operadores


//Operador incremental
// a = a + 1; --> a++;

document.write("<h2>Operadores incrementales</h2>");
document.write("Operador de preincremento unitario de a + 1: " + (++a) + "<br>");
document.write("Operador de post-incremento unitario de a + 1: " + (a++) + "<br>");
document.write("Operador de a + 1 " + (a) + "<br><br><br>");

//Operador decremental
//a = a-1; --> a-- ó --a

document.write("<h2>Operadores decrementales</h2> <br>");
document.write("Operador de decremento unitario de a - 1: " + (--a) + "<br>");

//Ejemplo de variables y operadores lógicos
//Declaració e inicialización de variables lógicas

let v = true;
let f = false;
