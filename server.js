const express = require('express');
const app = express();
const PORT = 8080;
const Contenedor = require('./contenedor');
let prod = new Contenedor('./productos.txt');

function productosAzar(datos){
    return datos[Math.floor(Math.random() * datos.length)]
}

const server = app.listen(PORT, () => {
    console.log(`servidor iniciado en el puerto ${server.address().port}`);
});

app.get('/', (request, response) => {
    response.send(`<h1>Bienvenido a servidor con express</h1>`);
});

app.get('/productos', async function (request, response) {
    let productosGet;
    try {
        productosGet = await prod.getAll();
    } catch (err) {
        console.log('error, no se puede leer', err);
    }
    response.send(productosGet);
});

app.get('/productoRandom', async function(request, response) {
    let productosGet;
    try {
        productosGet = await prod.getAll();
    } catch (err) {
        console.log('error, no se puede leer', err);
    }
    response.send(productosAzar(productosGet));
});