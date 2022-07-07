const express = require("express");

const app = express();

const PORT = 8080;
let visitas = 1;

app.get("/", (req, res) => {
    res.send({ mensaje: "bienvenidos al servidor express" });
});
app.get("/visitas", (req, res) => {
    res.send(`El sitio ha sido visitado ${visitas} veces`);
    visitas++
});
app.get("/fyh", (req, res) => {
    const fecha = new Date().toLocaleDateString()
    const hora = new Date().toLocaleTimeString()
    res.send({ fyh: `la fecha es ${fecha} la hora es ${hora}` });

});

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));