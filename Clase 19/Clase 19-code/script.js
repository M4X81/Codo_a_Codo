/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script sirve a index.html y genera manipulacionde del DOM
 * 
 * Desarrollaremos los siguientes temas:
 * 1- Métodos tradicionales - modificación de elementos. Métodos modernos - modificación de elementos con querySelector 
 * 2- Métodos tradicionales - modificación de elementos, utilizacion del bucle for
 * 3- Creación de elementos - creamos un boton, creamos un texto, clonamos un texto
 * 4- Modificamos atributos de un elemento - cambiamos contenido, agregamos clase, cambiamos un atributo
 * 5- Eventos addEventListener
 * 
 */

//*1-Modificación de elementos
//1.1- Declaración de las variables
let titulo, contenidos;

//2-Modificamos el título
titulo = document.getElementById("titulo1");
// console.log(titulo);

//Obtenemos el contenido de las etiquet3as h2
let contenidoTitulo= titulo.innerHTML;
console.log(contenidoTitulo);

//Modificamos el contenido del título
titulo.innerHTML = "Modificación de elementos del DOM con Js";

//Agregamos un class "modificado" al título
titulo.className = "modificado";

//Modificación de los párrafos
contenidos = document.getElementsByClassName("contenido1");
console.log(contenidos[1]);

//Modificación del primer párrafo
contenidos[0].innerHTML = "Este párrafo fue modificado con Js";

//Capturamos en contenido del primer párrafo
let contenidoP = document.querySelector(".contenido1:first-child");
contenidoP.className = "modificado"; 
let contenidoP2 = document.querySelector(".contenido1:last-child");
contenidoP2.className = "modificado"; 

// let contenidoP3 = document.querySelectorAll(".contenido1");
// contenidoP3.className="modificado";

//

// //Modificamos el segundo sin querySelector
// contenidos[0].className = "modificado";
//Se puede hacer asi pero no usar el anterior xq se colapsan

//2- Modificamos el título
//declaración e inicialización de variables
let titulo2;
//Modificación del título
titulo2= document.getElementById("titulo2");
//cambiamos el contenido con inner
titulo2.innerHTML = "Listado de frutas";
//agregamos una clase a título
titulo2.className= "modificado";

// implementamos una función
function cambiarTexto(){
    //variables
    let datos = document.getElementsByClassName("contenido2");
    //utilización de bucle for
    for (let i = 0; i < datos.length; i++) {
        //cambiamos cada elemento de datos por los del array de frutas
        datos[i].innerHTML = frutas[i];
        //agregamos estilo al listado 
        datos[i].classList.add("modificado");
    }

}

//Cambiamos el nombre del botón

let btn1 = document.querySelector(".boton-primario");
btn1.innerHTML = "Haz click!";
/******************************************/

//3- Creación de elementos 
let titulo3= document.getElementById("titulo3");
//Modificación del título
titulo3.innerHTML = "Creación de elementos";
//Agregamos una class
titulo3.className = "modificado";


//Creación de un botón
const btn2 = document.createElement("button");
//Leyenda del botón
btn2.innerHTML = "Soy un botón generado por Js";
//Añadimos clases al botón
btn2.className = "boton boton-primario";

//Si queremos utilizar classList
// btn2.classList.add("boton");
// btn2.classList.add("boton-primario");

//Inyectamos el botón en tema3
document.getElementById("tema3").appendChild(btn2);
//Agregamos un evento al botón
btn2.onclick = function(){
    //Creamos etiquetas p
    const p = document.createElement("p");
    //Creamos un nodo de texto
    const nodoTxt = document.createTextNode("Esto es un texto generado por Js");
    // Inyectamos en <p> el contenido de nodoTxt
    p.appendChild(nodoTxt);
    //insertamos el contenido del texto antes de botón
    tema3.insertBefore(p, btn2);
}
/**************************************************** */
//4- Modificación de atributos con Js
//Modificamos el título
let titulo4 = document.getElementById("titulo4");
//Modificamos el contenido con inner
titulo4.innerHTML = "Modificando atributos desde Js";
//Agregamos clase
titulo4.className = "modificado";
// Creamos in contenido de etiquetas p en tema4
const txt = document.getElementById("tema4");
//Insertamos dentro de txt un párrafo p
txt.innerHTML = "<p> Esto es un contenido generado por Js al <span> cual queremos cambiar sus estilos</span></p>";
//Creamos un botón para cambiar el estilo del contenido
const btn3 = document.createElement("button");
//Agregamos leyenda
btn3.innerHTML = "Cambiar estilo";
//Agregamos clases
btn3.className = "boton boton-primario";
//inyectamos el botón en el html
document.getElementById("tema4").appendChild(btn3);

//Programamos el btn para cambiar estilos
btn3.onclick = function(){
    //Modificamos estilos
    const txt1 = document.querySelector("#tema4>p");
    const txt2 = document.querySelector("#tema4>p>span");
    txt1.style.color = "grey";
    txt2.style.fontWeight = "bold";
}




