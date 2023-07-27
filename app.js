const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

// Corregir la ruta del directorio estático
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Aplicacion escuchando en puerto ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Corregir el operador de asignación en la ruta /register
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Corregir el operador de asignación en la ruta /login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
