/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script sirve a index.html y  
*genera funciones para cálculos aritméticos
 */

// 1- Declaración de las funciones
// function saludar() {
//     alert("Hola mundo");
// }

// //2- Activación de la función(llamada a la función)
// saludar();

//2- Declaración de saludar paramétrica
function saludar(name) {
    alert("Hola " + name);
}

//3-Funciones aritméticas
function sumar(num1,num2) {
    //1-Variables locales(el scope es local(dentro de las llaves))
    let resultado= num1+num2;//esto es una func sin retorno ya q no queda nada almacenado en memoria
    //2-Valor de retorno
    return resultado;

}
//3.1 Llamamos a sumar
console.log(sumar(10,5)*2);

//3.2-Función restar() es un func declarada y paramétrica con retorno
function restar(num1,num2) {
//declaración de variables locales
    let resultado =num1-num2;
//valor de retorno
    return resultado;
}
//3.3-Llamamos a restar
alert(restar(10,2));

//Funciones flecha
const sumarFlecha = (num1,num2)=>{num1 + num2};
//ó =>
//const sumarFlecha = (num1,num2)=>num1 + num2;
const restarFlecha = (num1,num2)=>num1 - num2;

const sumarFlecha2 = (num1,num2, num3)=>{return num1 + num2 +num3};
const restarFlecha2 = (num1,num2,num3)=>{return num1 - num2 - num3};

alert(sumarFlecha(1,2,3));