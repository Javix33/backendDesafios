let modulo = require("./classContenedor.js")
const PRODUCTO1 = {
    title: "blukie",
    price: 120,
    thumbnail: "https://javix33.github.io/wookie/resources/imagenes/productos/blukie4.jpg"
};
const PRODUCTO2 = {
    title: "Kashyyk blend",
    price: 120,
    thumbnail: "https://javix33.github.io/wookie/resources/imagenes/productos/kashyyyk2.jpg"
};
const PRODUCTO3 = {
    title: "Red trooper",
    price: 120,
    thumbnail: "https://javix33.github.io/wookie/resources/imagenes/productos/red2.jpg"
};
let productos = new modulo.contenedor("productos.txt");



(async function() {
    console.log(await productos.save(PRODUCTO1));
    console.log(await productos.save(PRODUCTO2));
    console.log(await productos.save(PRODUCTO3));
    console.log(await productos.getById(2));
    console.log(await productos.getAll())
    console.log(await productos.deletById(2));
    console.log(await productos.deleteAll());
})();

//console.log(productos.save(PRODUCTO2));
//console.log(productos.save(PRODUCTO3));
//console.log(productos.getById(3));

//console.log(productos.deletById(2));
//console.log(productos.deleteAll());