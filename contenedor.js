const fs = require('fs');

class Contenedor {

    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    async getAll() {

        let contenido;

        let data;

        try {
            contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8'); 
        } catch (err) {
            console.log('error, no se encontro el archivo', err)
        }

        data = JSON.parse(contenido);

        // console.log(data);

        // return data;

    }

}


module.exports = Contenedor;