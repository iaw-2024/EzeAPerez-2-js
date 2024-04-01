let jsonResponse;

//obtiene el json del servidor y llama a la funcion crearLista
function generarListado() {
  fetch("http://localhost:3000/json")
    .then((response) => response.json())
    .then((data) => {
      jsonResponse = data;
      crearLista();
    })
    .catch((error) => {
      console.log(error);
      document.body.innerHTML = error;
    });
}

//crear lista, crea el contenedor principal y llama a crearContenedorPosicion de cada posicion (arq, ...) y lo agrega al contenedor principal
function crearLista() {
  contenedor = document.createElement("div");
  contenedor.classList.add("container-sm");
  contenedor.classList.add("mt-3");
  h2 = document.createElement("h2");
  h2.innerHTML = "Seleccion Argentina";
  contenedor.appendChild(h2);
  for (const posicion in jsonResponse.SeleccionArgentina) {
    contenedor.appendChild(crearContenedorPosicion(posicion));
    console.log("entre");
  }
  document.body.appendChild(contenedor);
}

//crea el contenedor de cada posicion y llama a la funcion crearListaJugadores para crear la lista de jugadores y la agrega al contenedor de la posicion
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

//crea la lista de jugadores de la posicion correspondiente
function crearListaJugadores(posicion) {
  let lista = document.createElement("ul");
  lista.classList.add("list-group");
  lista.classList.add("list-group-flush");
  imagen = document.createElement("img");
  imagen.src = `${jsonResponse.SeleccionArgentina[posicion].imagen}`;
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
