/*
Vamos a crear un servidor estático Nativo
Es decir un software que a futuro funcionará desde el hardware 
del servidor y contestará
a las peticiones que realiza el cliente
*/

//1- Importación de módulos
const http = require("http");

//2-Creación del servidor estático
const server = http.createServer((req,res)=>{
res.writeHead(200,{
    "Content-Type": "text/plain"
});
res.end("Hola mundo");
});


//Llamamos a la función del server
server.listen(3000, ()=>{console.log("Servidor escuchando");});