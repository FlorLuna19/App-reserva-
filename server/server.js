const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");

const login = require('./login');

//ya podemos usar body parser
app.use(bodyParser.json());

//Uso de elementos estáticos
app.use(express.static(path.join(__dirname, '../client')))

//Ingreso al archivo index
app.get('/', function (req, res) {
    console.log("Entre al login");
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

//Le asigno una función 
app.get('/home', function (req, res) {
    console.log("Entre al home");
    res.sendFile(path.join(__dirname, '../client/home.html'));
})


app.get('/usuario', function (req, res) {
    console.log("Entre a usuario");
    res.sendFile(path.join(__dirname, '../client/usuario.html'));
})

//Login 
app.post('/login', (req, res) => {
    console.log(req.body);
    if (req.body.user !== undefined && req.body.password !== undefined) {
      if (login.validarUsuario(req.body.user, req.body.password)) {
        res.send('/home');
      } else {
        res.sendStatus(403);
      }
    } else {
      res.status(403).end();
    }
});


app.listen(4545, function(){
    console.log("Escuchando puerto 4545");
})