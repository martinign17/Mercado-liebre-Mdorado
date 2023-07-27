const express = require('express');
const app = express();
const path = require('path');



const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '/public')));

app.listen(PORT, () =>{
    console.log('Aplicacion escuchando en puerto ${PORT}');
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/register', (req,res) =>{
    res.sendFile(__dirname = '/views/register.html')
})

app.get('/login', (req,res) =>{
    res.sendFile(__dirname = '/views/login.html')
})