const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));


const PORT = 3000;

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

app.get("/json", (req, res) => {
  res.json(jsonResponse);
});

app.get("/lista", (req, res) => {
  //mostrar todas las posiciones
  let listaJugadores = "";

  //recorrer el objeto
  for (const posicion in jsonResponse.SeleccionArgentina) {
    imagen = `<img src="./${jsonResponse.SeleccionArgentina[posicion].imagen}" style="width: 35px;"/>`;
    for (const jugadores in jsonResponse.SeleccionArgentina[posicion]
      .jugadores) {
      listaJugadores += `<li>${imagen} - ${jsonResponse.SeleccionArgentina[posicion].jugadores[jugadores].nombre}</li>`;
    }
  }
  res.send(`<ul style="list-style-type: none;">${listaJugadores}</ul>`);
});

app.get("/arqueros", (req, res) => {
  //mostrar todas las posiciones
  let listaJugadores = "";
  const arqueros = jsonResponse.SeleccionArgentina.Arquero;
  imagen = `<img src="./${arqueros.imagen}" style="width: 35px;"/>`;
  for (const jugador in arqueros.jugadores) {
    listaJugadores += `<li>${imagen} - ${arqueros.jugadores[jugador].nombre} - ${arqueros.jugadores[jugador].edad}</li>`;
  }

  res.send(`<ul style="list-style-type: none;">${listaJugadores}</ul>`);
});

app.get("/defensores", (req, res) => {
  //mostrar todas las posiciones
  let listaJugadores = "";
  const defensores = jsonResponse.SeleccionArgentina.Defensa;
  imagen = `<img src="./${defensores.imagen}" style="width: 35px;"/>`;
  for (const jugador in defensores.jugadores) {
    listaJugadores += `<li>${imagen} - ${defensores.jugadores[jugador].nombre} - ${defensores.jugadores[jugador].edad}</li>`;
  }

  res.send(`<ul style="list-style-type: none;">${listaJugadores}</ul>`);
});

app.get("/mediocampistas", (req, res) => {
  //mostrar todas las posiciones
  let listaJugadores = "";
  const mediocampistas = jsonResponse.SeleccionArgentina.Mediocampista;
  imagen = `<img src="./${mediocampistas.imagen}" style="width: 35px;"/>`;
  for (const jugador in mediocampistas.jugadores) {
    listaJugadores += `<li>${imagen} - ${mediocampistas.jugadores[jugador].nombre} - ${mediocampistas.jugadores[jugador].edad}</li>`;
  }

  res.send(`<ul style="list-style-type: none;">${listaJugadores}</ul>`);
});

app.get("/delanteros", (req, res) => {
  //mostrar todas las posiciones
  let listaJugadores = "";
  const delanteros = jsonResponse.SeleccionArgentina.Delantero;
  imagen = `<img src="./${delanteros.imagen}" style="width: 35px;"/>`;
  for (const jugador in delanteros.jugadores) {
    listaJugadores += `<li>${imagen} - ${delanteros.jugadores[jugador].nombre} - ${delanteros.jugadores[jugador].edad}</li>`;
  }

  res.send(`<ul style="list-style-type: none;">${listaJugadores}</ul>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});