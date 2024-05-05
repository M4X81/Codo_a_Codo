/*
 * autor/a:
 * version:
 * fecha: 
 * el siguiente script sirve a index.html y genera una
 * funcio que se llama menú
 * El menú consta de un switch que por recursividad
 * vuelve a llamarse a si misma
*/

//1- Declaración de la función menú

function menu() {
    //Inicialización de la variable local por instruccion de entrada
    let opc = prompt("Seleccione una opción : \n 1.Sumar \n 2. Restar \n 3.Salir");
    //Proceso mediante un switch
    switch (opc) {
        case "1":
            //inicializ de var
            let dato1 = parseFloat(prompt("Ingrese el primer número"));
            let dato2 = parseFloat(prompt("Ingrese el segundo número"));
            //llamada a la func
            alert(sumar(dato1, dato2));
            //por recursividad le damos comportamiento de bucle
            menu();
            break;
        case "2":
            //inicializ de var
            let dato3 = parseFloat(prompt("Ingrese el primer número"));
            let dato4 = parseFloat(prompt("Ingrese el segundo número"));
            //llamada a la func
            alert(restar(dato3, dato4));
            //por recursividad le damos comportamiento de bucle
            menu();
            break;
        case "3":
            document.write("<h2> Hasta luego!!</h2>");
            exit(0);

        default:
            alert("Opción no válida, intente nuevamente");
            menu();
            break;
    }
}