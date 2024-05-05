/*
*Autor
*Versión
*fecha
*El script simula un login con estructura if-else
sirve al archivo index3.html
Mediante un bucle while damos 3 intentos de login 
al usuario
*/

// 1- Declaración en inicialización de variables (instruccion prompt())

let usr; //usr=x;
let key;

//2- Declaración e Inicialización de las variables
// Declaracion de variables de control

let repite = false;
let contador = 0;

//Inicialización de las variables mediante instrucción de entrada prompt
do {
    usr = prompt("Por favor, ingrese su nombre de usuario/a: ");
    key = prompt("Por favor, ingrese su clave");
    //Prompt SIEMPRE carga alfanuméricos (string)
    console.log(contador);
    //3- Proceso de estructura de control if el bucle do-while


    if ((usr === "codo" || usr === "codo@codo.com") && key === "123") {
        //este bloque es el que se ejecuta en el caso verdadero
        document.write("<h2>Ingreso exitoso, bienvenido/a </h2>" + usr)
        //Actualización de la variabled e control y bandera
        repite = false;
        //una opcion para finalizar y no de el alert de fuera del ciclo
        //se puede usar : exit(0);
        //ó usar lo de la linea 49
    } else {
        //este es el bloque que se ejecuta en el caso de ser falso
        alert("Usuario o clave incorrectos. Por favor, intente más tarde")
        //Actualización de la variabled e control y bandera
        repite = true;      
    }
    //Actualización de la variable contador
    contador++;
    console.log(contador);
    //Aviso de intentos
    if (repite) {
        alert("Te quedan " + (3-contador) +" intentos...");
    }
    
} while (repite && (contador<3));

