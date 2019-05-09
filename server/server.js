const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const fs = require('fs');
const expressSession = require('express-session');


//const mongodb = require('mongodb');
//const MongoClient = mongodb.MongoClient;
//const mongoURL = 'mongodb://localhost: 27017;
//const dbName = "testdb";

//Js para login
const login = require('./login');

//Middleware de body parser para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Ruta para uso de elementos estáticos
app.use(express.static(path.join(__dirname, '../client')));


//GET
//Ingreso al archivo index
app.get('/', function (req, res) {
    console.log("Entre al login");
    res.sendFile(path.join(__dirname, '../client/index.html'));
})



//POST / home
app.get('/home', function (req, res) {
    console.log("Entre al home");
    res.sendFile(path.join(__dirname, '../client/home.html'));
})


app.get('/usuario', function (req, res) {
    console.log("Entre a usuario");
    res.sendFile(path.join(__dirname, '../client/usuario.html'));
})

//POST / Login 
app.post('/login', (req, res) => {
    console.log(req.body);

    if (req.body.user !== undefined && req.body.password !== undefined) {
      // Si valido 'ok', redirige al home
      if (login.validarUsuario(req.body.user, req.body.password)) {
        res.send('/home');
      } else {
        res.sendStatus(403);
      }
    } else {
      res.status(403).end();
    }
});


//Uso archivo reserva
app.get('/reserva', function (req, res) {
  fs.readFile(path.join(__dirname, 'diasDisponibles.json'), (err, data) => {
    if (err == undefined) {
      let jsonDatosDiasReserva = JSON.parse(data);
      res.send(jsonDatosDiasReserva)
    }
    res.render('reserva', { lugares: lugares });
  })
  console.log("estoy aca");

})


app.get('/reservarlugar', function (req, res) {

  // Reserva guardada
  readFile(path.join(__dirname, 'diasDisponibles.json'), (err, data) => {
    if (err == undefined) {
      let jsonDatosDiasReserva = JSON.parse(data);
      res.send(jsonDatosDiasReserva)
    }
    render('reserva', {
      lugares: lugares,
      mensaje: "Se reservó ok"
    })
  })
  
  
})



//Server iniciado en puerto 4545
app.listen(4545, function(){
    console.log("Escuchando puerto 4545");
})