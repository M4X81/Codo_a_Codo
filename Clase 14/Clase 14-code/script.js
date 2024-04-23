/*
*Autor
*Versión
*fecha
*El script utiliza estructura de control para un login
*/

// 1- Declaración en inicialización de variables (instruccion prompt())

let usr; //usr=x;
let key;

//2- Inicialización de las variables

usr= prompt("Por favor, ingrese su nombre de usuario/a: ");
key= prompt("Por favor, ingrese su clave");

//3- Proceso de estructura de control if

if (usr === "codo" && key==="123") {
//este bloque es el que se ejecuta en el caso verdadero
    document.write("Ingreso exitoso, bienvenido/a " + usr)
} else {
    //este es el bloque que se ejecuta en el caso de ser falso
    alert("Usuario o clave incorrectos. Por favor, intente más tarde")

}


