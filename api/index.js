const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const jsonResponse = {
    SeleccionArgentina: {
      Arquero: {
        imagen: "imagenes/logo-arquero.png",
        jugadores: [
          { nombre: "Emiliano Martínez", edad: 29 },
          { nombre: "Gerónimo Rulli", edad: 31 },
        ],
      },
      Defensa: {
        imagen: "imagenes/logo-defensa.png",
        jugadores: [
          { nombre: "Nicolás Otamendi", edad: 34 },
          { nombre: "Gonzalo Montiel", edad: 25 },
          { nombre: "Nicolás Tagliafico", edad: 29 },
          { nombre: "Cristian Romero", edad: 23 },
          { nombre: "Nahuel Molina", edad: 24 },
          { nombre: "Juan Foyth", edad: 24 },
          { nombre: "Germán Pezzella", edad: 30 },
        ],
      },
      Mediocampista: {
        imagen: "imagenes/logo-mediocampista.png",
        jugadores: [
          { nombre: "Rodrigo De Paul", edad: 27 },
          { nombre: "Giovani Lo Celso", edad: 26 },
          { nombre: "Leandro Paredes", edad: 27 },
          { nombre: "Guido Rodríguez", edad: 27 },
          { nombre: "Alejandro Gómez", edad: 34 },
          { nombre: "Exequiel Palacios", edad: 23 },
          { nombre: "Emiliano Buendía", edad: 25 },
        ],
      },
      Delantero: {
        imagen: "imagenes/logo-delantero.png",
        jugadores: [
          { nombre: "Lionel Messi", edad: 34 },
          { nombre: "Ángel Di María", edad: 34 },
          { nombre: "Lautaro Martínez", edad: 24 },
          { nombre: "Paulo Dybala", edad: 30 },
          { nombre: "Ángel Correa", edad: 29 },
          { nombre: "Julián Álvarez", edad: 24 },
        ],
      },
    },
  };

app.get("/express", (req, res) => {
  let listaJugadores = '<h2>Seleccion Argentina:</h2>';
  //recorrer las posiciones y sus jugadores
  for (const posicion in jsonResponse.SeleccionArgentina) {
    listaJugadores += '<div class="container-sm mt-3">';
    listaJugadores += `<h3>${posicion}</h3>`;
    listaJugadores += '<ul class="list-group-flush">';
    imagen = `<img src="./${jsonResponse.SeleccionArgentina[posicion].imagen}" style="width: 35px;"/>`;
    for (const jugadores in jsonResponse.SeleccionArgentina[posicion]
      .jugadores) {
      listaJugadores += `<li class="list-group-item">${imagen} - ${jsonResponse.SeleccionArgentina[posicion].jugadores[jugadores].nombre}</li>`;
    }
    listaJugadores += '</ul>';
  }

res.send(`<div>${listaJugadores}</div>`);
});


app.get("/json", (req, res) => {
  res.json(jsonResponse);
});

app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;