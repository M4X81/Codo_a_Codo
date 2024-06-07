//Código sincrónico
console.log("Esto se ve primero");
console.log("Esto se ve segundo");

//Código asincrónico
console.log("Esto es primero");
setTimeout(function(){console.log("Esto imprime último")}, 5000);
console.log("Esto imprime segundo");

//Fetch
//Declaración del objeto literal
const opciones = {
    method: "GET",
    headers: {
        accept: "application/json"
    }
};


fetch("https://rickandmortyapi.com/api/character", opciones)
//en la function se deberia usar funcion flecha en vez de normal que seria...
// .then(response => response.json())
.then(function(response){
    //convertimos la respuesta en un objeto js
    return response.json();
})
// a partir del 2do .then ya podemos utilizar las devoluciones como objeto
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.error(error)
})

//Declaramos una función para traer al personaje 1
function pedirDatos1() {
    fetch("https://rickandmortyapi.com/api/character/1", opciones)
    .then((response)=>{
        return response.json()
    })
    .then((personaje)=>{
        //Hacemos consultas al objeto
        console.log(personaje.name, personaje.image, personaje.species)
    })
    .catch((error)=>{
        console.error(error)
    })
}
//Llamada a la funcion
pedirDatos1();

// Función que renderiza personajes en el frontend
function pedirDatos() {
    fetch("https://rickandmortyapi.com/api/character", opciones)
    .then(response=>response.json())

    //En este .then manipularemos al DOM
    .then((personajes)=>{
        //Obtenemos el contenedor deonde renderizamos las tarjetas
        const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
        //Utilizamos un for each para cargar los objetos del DOM
        personajes.results.forEach(dato => {
            //Creamos el elemento html
            const article = document.createElement('article');
            //Agregamos estilo a article
            article.classList.add("tarjeta");
            //Inyectamos contenido a <article>
            article.innerHTML = `
            <img src="${dato.image}" alt="Imagen del personaje ${dato.name}" class="card_img-size">
            <label>Nombre:</label>
            <p>${dato.name}</p>
            <div>
              <label>Estado:</label>
              <p><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>${dato.status}</p>
              <label>Planeta:</label>
              <p>${dato.location.name}</p>
            </div>
            `
            //Adjuntamos el contenido
            contenedorTarjetas.appendChild(article);
        });
    })
    .catch((error)=>{
        console.error(error)
    })
}

//Llamada a la función
pedirDatos();