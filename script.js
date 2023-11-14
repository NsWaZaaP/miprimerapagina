// alert("Hola este es mi Javascript");

// let nombre = "Dulce"

// console.log(nombre);

let contenidoTitulo = "acerca";

let titulo = document.querySelector("#acerca");

titulo.innerHTML = contenidoTitulo;

console.log(titulo.innerHTML);

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo === "acerca") {
  titulo.innerHTML = "este es el cambio";
} else {
  console.log(" no se cumplio");
}

const nav = document.querySelector("#hamburguesa");
const abrir = document.querySelector("#abrir");
const cderrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});
