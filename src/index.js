// app.js
require('dotenv').config();
// Importa las dependencias
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Crea una instancia de Express
const app = express();

// Configura el puerto del servidor
const PORT = process.env.SERVER_PORT || 8090;

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('Hola, esta es tu aplicación Node.js');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
