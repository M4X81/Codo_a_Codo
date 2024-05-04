/*  
*Autor
*versión
*fecha
*El siguiente script genera control de flujos mediante switch
*/

//1- Declaracion de variables

let opc;

//Variable de control

let repite=false; //variable bandera
let num=0;

do {
 
    //Inicialización por instrucción de entrada

opc= prompt("Bienvenido/a\nIngrese 1 si desea un saludo\nIngrese 2 si desea una despedida");

//3- Proceso mediante estructura de switch

switch (opc) {
    case "1":
        document.write("<h1> Hola! que tengas un lindo día...</h1>");
        //actualización de la variable de control
        repite=false;
        break;
    case "2":
        document.write("<h1> Hasta la próxima!</h1>");
        //actualización de la variable de control
        repite=false;
        break;

    default:
        alert("Introduzca una opción válida...");
        num ++;
        repite=true;//encendemos el bucle
       console.log(num);
        break;
}
} while (repite && num < 3);

//Modificado para solo 3 intentos( agregar alert para avisar que se agotaron...)

console.log("Programa finalizado");




