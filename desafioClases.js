class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName() { return `El nombre del usuario es ${this.nombre} ${this.apellido}` }
    addMascota(MascotaName) { this.mascotas.push(MascotaName) }
    countMascotas() { return (`Este usuario tiene ${this.mascotas.length} mascotas`) }
    addBook(bookTitle, bookAutor) { this.libros.push({ title: bookTitle, autor: bookAutor }) }
    getBookNames() {
        const BOOKNAMES = [];
        this.libros.forEach(libro => BOOKNAMES.push(libro.title))
        return BOOKNAMES
    }
}

let usuario1 = new Usuario("javier", "alberto")
usuario1.addBook("el señor de las moscas", "William Golding")
usuario1.addBook("El arte de amarte", "Napa")
usuario1.addMascota("gamera")
usuario1.addMascota("gamera jr")
usuario1.getFullName()
usuario1
usuario1.countMascotas()
usuario1.getBookNames()
usuario1.libros