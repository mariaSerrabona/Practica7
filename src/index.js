// app.js
require('dotenv').config();
// Importa las dependencias
const express = require('express');
const dotenv = require('dotenv');

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Crea una instancia de Express
const app = express();

// Configura el puerto del servidor
const PORT = process.env.SERVER_PORT || 3000;

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('Hola, esta es tu aplicación Node.js');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
