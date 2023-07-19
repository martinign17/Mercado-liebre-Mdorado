const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const puerto = 3001;

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(puerto, () => {
    console.log('Aplicación esuchando en puerto 3001');
});


