// start_server.js

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('server_config.json', 'utf-8'));

// Utiliza la configuración, por ejemplo:
console.log(`El servidor se ejecutará en el puerto ${config.port}`);
