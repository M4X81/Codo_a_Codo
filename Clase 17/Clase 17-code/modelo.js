/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script modelo sirve a index.html y genera el molde principal
 * luego será adaptado a los personajes particulares en el archivo instancias.js
 * En este archivo estaremos dando las caracteristicas genéricas comunes a 
 * todos los objetos que crearemos en el futuro
 */

// Definimos un objeto mediante una funcion constructora

function Simpson(nombre, edad, peso, esCalvo, fraseFavorita){
    //Atributos de clase, inicializacion de variables del objeto
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.esCalvo = esCalvo;
    this.fraseFavorita = fraseFavorita;

    // Método para obtener la foto (funciones dentro de una variable, como lo visto en flecha)
    // this. indica que el método será propiedad del objeto nuevo, que se creará en el otro archivo
    // Estos métodos se llaman anónimos

    this.obtenerFoto = function(){
        document.write(`<div class="container">`);
        document.write(`<img src="./assets/${this.nombre.toLowerCase()}.png" alt="${this.nombre}">`);
    }

    // Metodo para obtener el nombre
    this.obtenerNombre = function(){
        document.write(`<p>Nombre: ${this.nombre}</p>`);
    }

    // Método para obtener edad
    this.obtenerEdad = function(){
        document.write(`<p>Edad: ${this.edad} años</p>`);
    }

    //Tarea para la casa consultar calvicie
    this.esPelado = function () {
      if (this.esCalvo) {
        document.write(`<p>Es Calvo?: si </p>`);
      } else {
        document.write(`<p>Es Calvo?: no </p>`);
      }
    };

    //Tarea para la casa consultar peso
    this.obtenerPeso = function(){
      document.write(`<p>Peso: ${this.peso} kg</p>`);
  }
    // Método para obtener frase favorita
    this.obtenerFraseFavorita = function(){
        document.write(`<p>Frase favorita de ${this.nombre}: ${this.fraseFavorita}</p>`);
        document.write('</div>');
    }
}