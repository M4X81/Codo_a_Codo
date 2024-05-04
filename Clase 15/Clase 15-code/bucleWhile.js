/**
 * Autor/a: 
 * version:
 * fecha:
 * El siguiente script sirve a index1.html y genera 
 * accion de repeticion con bucle while
 */

//1- Declaración de variables

let dato;

//variable de control

let registrar;

//2- Proceso mediante bucle while
registrar= prompt("Desea registrar datos?(s/n)");

while (registrar.toLowerCase() === "s") {
    //Inicialización de la variable dato
    dato=prompt("Ingrese un dato: ");
    //Salida al navegador
    document.write(" <p> Usted ingresó: " + dato + "</p>");
    //actualización de la variable de control
    registrar= prompt("Desea cargar otro dato?(s/n)");
}