var nota = 7
console.log("He realizado mi examen. Mi resultado es el siguiente: ")

if (nota < 5){
    calificacion = "suspendido";
} else {
    calificacion = "aprobado";
}
console.log("Mi nota es: ", nota);
console.log("Estoy", calificacion);

//----------------------------------------

if (nota < 5){
    calificacion = "suspendido";
}
if(nota >= 5){
    calificacion = "aprobado";
}
console.log("Mi nota es: ", nota);
console.log("Estoy", calificacion);

//-----------------------------------------
nota = 3
var calificacion = nota < 5 ? "suspendido" : "aprobado";
console.log("Mi nota es: ", nota);
console.log("Estoy", calificacion);