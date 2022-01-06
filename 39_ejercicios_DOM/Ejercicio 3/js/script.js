
const opciones = document.querySelector("#opciones");
const boton = document.querySelector("#boton");

console.log(opciones);
console.log(boton);



function eliminar() {
    opciones[0].remove()
}
boton.addEventListener("click", eliminar)
