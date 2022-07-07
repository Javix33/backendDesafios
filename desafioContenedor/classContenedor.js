const fs = require("fs")

class contenedor {
    constructor(nombreDeArchivo) {
        this.idAsignado = 1
        this.nombreDeArchivo = nombreDeArchivo
        this.productos = []

    }
    async save(Object) {
        let newObject = {...Object, id: this.idAsignado }
        this.productos.push(newObject)
        async function write(archivo, array) {
            try {
                await fs.promises.writeFile(archivo, JSON.stringify(array))

            } catch (err) { throw new Error("Error al escribir archivo") }
        }
        await write(this.nombreDeArchivo, this.productos);
        this.idAsignado++;
        return newObject.id
    }
    async getById(id) {
        let element
        try {
            let ProdFile = JSON.parse(await fs.promises.readFile(this.nombreDeArchivo, "utf-8"))
            ProdFile.forEach((prod) => {
                if (prod.id == id) {
                    element = prod;
                }
            })
            if (element) {
                return element;
            } else { return null; }

        } catch (err) { throw new Error("Error al leer archivo") }
    }



    async getAll() {
        let AllFiles

        try {
            AllFiles = JSON.parse(await fs.promises.readFile(this.nombreDeArchivo, "utf-8"))
            return AllFiles;
        } catch (err) { throw new Error("Error al leer archivo") }


    }
    async deletById(id) {
        let newProdFile = []
        try {
            let ProdFile = JSON.parse(await fs.promises.readFile(this.nombreDeArchivo, "utf-8"))
            ProdFile.forEach((prod) => { if (prod.id != id) { newProdFile.push(prod) } })
            await fs.promises.writeFile(this.nombreDeArchivo, JSON.stringify(newProdFile))
        } catch (err) { throw new Error("Error al eliminar el producto") }
    }
    async deleteAll() {
        let empty = [];

        try {
            await fs.promises.writeFile(this.nombreDeArchivo, JSON.stringify(empty))

        } catch (err) { throw new Error("Error al escribir archivo") }

    }
}
module.exports.contenedor = contenedor;