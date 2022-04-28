const fs = require('fs');

class Contenedor {

    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    async getAll() {
        let contenido;

        try {
            contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8'); 
            contenido = JSON.parse(contenido);
            return contenido;
        } catch (err) {
            console.log('error, no se encontro el archivo', err);
        }
    }
}

module.exports = Contenedor;