const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:5000'
  }));

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

// Inicia el servidor en el puerto 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});