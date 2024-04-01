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
  
  function crearLista() {
    contenedor = document.createElement("div");
    contenedor.classList.add("container-sm");
    contenedor.classList.add("mt-3");
    h2 = document.createElement("h2");
    h2.innerHTML = "Seleccion Argentina";
    contenedor.appendChild(h2);
    for (const posicion in jsonResponse.SeleccionArgentina) {
      contenedor.appendChild(crearContenedorPosicion(posicion));
    }
    document.body.appendChild(contenedor);
  }
  
  function crearContenedorPosicion(posicion) {
      contenedorPosicion = document.createElement("div");
      contenedorPosicion.classList.add("container-sm");
      contenedorPosicion.classList.add("mt-3");
      h3 = document.createElement("h3");
      h3.innerHTML = posicion;
      contenedorPosicion.appendChild(h3);
      contenedorPosicion.appendChild(crearListaJugadores(posicion));
    return contenedorPosicion;
  }
  
  function crearListaJugadores(posicion) {
    let lista = document.createElement("ul");
    lista.classList.add("list-group");
    lista.classList.add("list-group-flush");
    imagen = document.createElement("img");
    imagen.src = `${/public/ + jsonResponse.SeleccionArgentina[posicion].imagen}`;
    imagen.style.width = "35px";
    for (const jugadores in jsonResponse.SeleccionArgentina[posicion].jugadores) {
      li = document.createElement("li");
      li.classList.add("list-group-item");
      li.appendChild(imagen);
      li.innerHTML =
        li.innerHTML +
        ` ${jsonResponse.SeleccionArgentina[posicion].jugadores[jugadores].nombre}`;
      lista.appendChild(li);
    }
    return lista;
  }
  