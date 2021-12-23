function  tablaMultiplicar(tabla, hasta =10) {
    for(i = 0; i<= hasta; i++){
        console.log(tabla, "x", i, "=", tabla*i)
    }
    
}
//Ejecucion
//tablaMultiplicar(2)//Esta tabla llega hasta el numero 10
//tablaMultiplicar(2,15)//Esta tabla llega hasta el numero 15

//Simulando una carrera de autos
//==============================================================

//     Funciones

function generarNumeroaleatorio(min, max) {
    let suerte = 0
    let random = 0

    suerte = Math.random()*(max-min)
    random = min + Math.round(suerte)
    return random
}


function avanzar() {
    let metros = 0
    metros = generarNumeroaleatorio(10,20)
    return metros
}

//      Main

let auto = 0 //metros recorridos

const META = 100


do {
    auto += avanzar()   
    console.log("El auto avanzo", auto) 
} 
while (auto < META);

console.log("Total recorrido: ", auto, " metros")