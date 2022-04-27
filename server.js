const express = require('express'); 
const app = express(); 
const PORT = 8080; 
const Contenedor = require('./contenedor');
let prod = new Contenedor('./productos.txt');

const a = prod.getAll();
console.log(a)

function productsAzar(datos){
    return datos[Math.floor(Math.random() * datos.length)]
}
console.log(productsAzar(a));

const server = app.listen(PORT, () => {
    console.log(`servidor iniciado en el puerto ${server.address().port}`)
}); 

app.get('/', (request, response) => {
    response.send(`<h1>Bienvenido a servidor con express</h1>`)
});

app.get('/productos', (request, response) => {
    response.send(a)
});

app.get('/productoRandom', (request, response) => {
    response.send(`<h1>${productsAzar(a)}</h1>`)
});