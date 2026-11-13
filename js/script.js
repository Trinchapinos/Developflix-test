import peliculas from "./peliculas.js";

console.log(peliculas);

const accion = peliculas.filter((peli) => peli.genre_ids.includes(28));
console.log("Acción:", accion);

const thriller = peliculas.filter((peli) => peli.genre_ids.includes(53));
console.log("Thriller:", thriller);

const aventura = peliculas.filter((peli) => peli.genre_ids.includes(12));
console.log("Aventura:", aventura);

// CONTENEDOR DE ACCION

const contenedorAccion = document.getElementById("genero-28");
console.log("Contenedor Acción:", contenedorAccion);

// contenedorAccion.innerHTML = accion
//   .map(
//     (peli) => `
//     <p>${peli.title}</p>
//     <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">`,
//   )
//   .join("");

// CONTENEDOR DE THRILLER

const contenedorThriller = document.getElementById("genero-53");
console.log("Contenedor Thriller:", contenedorThriller);

// contenedorThriller.innerHTML = thriller
//   .map(
//     (peli) => `
//     <p>${peli.title}</p>
//     <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">`,
//   )
//   .join("");

// CONTENEDOR DE AVENTURA

const contenedorAventura = document.getElementById("genero-12");
console.log("Contenedor Aventura:", contenedorAventura);

// contenedorAventura.innerHTML = aventura
//   .map(
//     (peli) => `
//     <p>${peli.title}</p>
//     <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}">`,
//   )
//   .join("");

const mostrarContenedores = (contenedor, listaPelis) => {
  contenedor.innerHTML = listaPelis
    .map(
      (peli) =>
        `<div class="pelicula"><img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt="${peli.title}"><p>${peli.title}</p></div>`,
    )
    .join("");
};

mostrarContenedores(contenedorAccion, accion);
mostrarContenedores(contenedorThriller, thriller);
mostrarContenedores(contenedorAventura, aventura);
