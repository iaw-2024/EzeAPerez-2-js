const express = require("express");
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

app.get("/express", (req, res) => res.send("Express on Vercel!"));
app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));
app.get("/json", (req, res) => {
  res.json(jsonResponse);
});

app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;