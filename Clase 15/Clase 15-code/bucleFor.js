/**
 * Autor/a: 
 * version:
 * fecha:
 * El siguiente script sirve a index2.html y genera 
 * accion de repeticion con bucle for
 */

//1- Declaración de las variables

let cant, nota, suma, promedio;

// Sobre las variables
// cant, nota se inicializan por instrucción de entrada
// suma, es una variable acumuladora gestiona su propio valor sumando valores e inicia en 0
// promedio se inicializará a partir de una fórmula que plantearemos

//2- Inicialización de algunas variables

suma=0;
//Inicialización por instrucción de entrada de cant
cant= parseInt(prompt("Ingrese la cantidad de notas a cargar: "));
//parseInt transforma string a num

//3- Proceso mediante bucle for

for (let i = 0; i < cant; i++) {
    
    nota = parseFloat(prompt("Ingrese un valor:"));

    document.write("<p>Se introdujo la nota: "+nota+"</p>");

    //Acumulamos el valor en la variable acumuladora
    suma = suma+nota; //ó suma+= nota;

}

// Resultado del promedio
promedio = suma/cant;
document.write(`<p style="font-weight:bold">El promedio final es: ${promedio}</p>`);
document.write(`<p style="color:green; font-weight:bold">El programa ha finalizado</p>`);
