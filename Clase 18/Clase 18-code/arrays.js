/**
 * DESAFIO 1
 * Declaramos un array
 * Exploramos los distintos métodos
 * create(crear), read(leer), upload(actualizar), delete(borrar)
 */

//1- Declaración de un array

let autos= ["Tito", "F.Fuego"];

//2-Imprimimos el contenido
console.log(autos);

//Métodos de los arrays
//1-Insertar valores .push()

autos.push("Volvo");

//BMW, Ford, Mazda
autos.push("BMW");
autos.push("Ford");
autos.push("Mazda");
autos.push("Volvo");
// autos.push("Volvo","Mazda","Ford","BMW");

//2-Imprimir array
console.log("El nuevo array es: " +autos);

//3-Obtenemos la longitud del array

let longitud= autos.length;
console.log("La longitud de autos es " + longitud);
console.log("La longitud de autos es " + autos.length);

//4-Obtenemos o recuperamos un valor de un elemento cualquiera
// método .at()
console.log("El valor del último dato es: " + autos.at(-1));
console.log("El valor del índice 3 es: " + autos.at(3));

//5- Seteamos un valor
//Primero obtenemos el valor del índice
console.log("El índice de volvo es: "+ autos.indexOf("Volvo"));
autos[2]= "Fitito";
console.log("El nuevo array es: " + autos);

//Remover con .splice()
autos.splice(5,1);
console.log("El nuevo array es: " + autos);

//7-Ordenamos nuestra lista .sort()
autos.sort();
console.log("El nuevo array es: " + autos);

//8-Agregamos una marca al ppio .unshift()
autos.unshift("Ferrari");
console.log("El nuevo array es: " + autos);

//9- Borramos el primer elemento
autos.shift();
console.log("El nuevo array es: " + autos);

//10- Declaramos un nuevo array
let otrasMarcas= ["Toyota", "Honda"];

//11-Declaramos otro array que contenga a ambos
let marcasCombinadas = autos.concat(otrasMarcas);
console.log("El nuevo array marcas combinadas es: " + marcasCombinadas);

//12-bucle for-in (itera el indice)
for(let index in marcasCombinadas){
    console.log("Indice: " + index + " Valor: " + marcasCombinadas[index]);   
}

//13-Bucle for-of (recorre solo el valor, no el indice)
for(let marca of marcasCombinadas){
    console.log("Valor: " + marca);
}




