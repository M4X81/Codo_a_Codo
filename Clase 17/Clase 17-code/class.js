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

class Simpson{
    constructor(nombre, edad, peso, esCalvo, fraseFavorita){
    //Atributos de clase, inicializacion de variables del objeto
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.esCalvo = esCalvo;
    this.fraseFavorita = fraseFavorita;
    }

    // Método para obtener la foto (funciones dentro de una variable, como lo visto en flecha)
    // this. indica que el método será propiedad del objeto nuevo, que se creará en el otro archivo
    // Estos métodos se llaman anónimos

    obtenerFoto(){
        document.write(`<div class="container">`);
        document.write(`<img src="./assets/${this.nombre.toLowerCase()}.png" alt="${this.nombre}">`);
    }

    // Metodo para obtener el nombre
    obtenerNombre(){
        document.write(`<p>Nombre: ${this.nombre}</p>`);
    }

    // Método para obtener edad
    obtenerEdad(){
        document.write(`<p>Edad: ${this.edad} años</p>`);
    }

    //Tarea para la casa consultar calvicie
    esPelado() {
      if (this.esCalvo) {
        document.write(`<p>Es Calvo?: si </p>`);
      } else {
        document.write(`<p>Es Calvo?: no </p>`);
      }
    };

    //Tarea para la casa consultar peso
    obtenerPeso(){
      document.write(`<p>Peso: ${this.peso} kg</p>`);
  }
    // Método para obtener frase favorita
    obtenerFraseFavorita(){
        document.write(`<p>Frase favorita de ${this.nombre}: ${this.fraseFavorita}</p>`);
        document.write('</div>');
    }
}

//Instanciacion de los objetos, es la inicializacion de cada objeto con valores particulares
const homero = new Simpson("Homero", 40, 190, true, "Ouch!");
const marge = new Simpson("Marge", 38, 35, false, "Mmmm...");
const bart = new Simpson("Bart", 10, 20, false,"Ay caramba!");
const lisa = new Simpson("Lisa", 8, 18, false, "Baaaart!");