//constantes
const PI = 3.1415926

//funciones

//suma
function suma(numero_1, numero_2) {
    let resultado = numero_1+numero_2
    return resultado
}

//resta
function resta(numero_1, numero_2) {
    let resultado = numero_1-numero_2
    return resultado
}

//multiplicacion
function multiplicacion(numero_1, numero_2) {
    let resultado = numero_1*numero_2
    return resultado
}

//division
function division(numero_1, numero_2) {
    let resultado = numero_1/numero_2
    return resultado
}

//modulo
function modulo(numero_1, numero_2) {
    let resultado = numero_1%numero_2
    return resultado
}

//raiz
function raiz(numero_1) {
    let resultado = Math.sqrt(numero_1)
    return resultado
}



//area del trapecio
function area_trapecio(base_menor, base_mayor,altura) {
    let resultado = 0.5*altura*(base_mayor+base_menor)
    return resultado
}

//area del triangulo con lados
function area_triangulo(lado1, lado2,lado3) {
    let semi = 0.5*(lado1+lado2+lado3)
    Math.abs(
        semiperimetro *
          ((semiperimetro - lado1) *
            (semiperimetro - lado2) *
            (semiperimetro - lado3))
      )
}

//area del circulo
    function area_circulo(radio){
        //entrada: radio de un circulo
        //salida: area del circulo
        //inicializar variables
        let resultado = 0 
        //calculo
        resultado  = PI * radio*radio
        //devolver el valor
        return resultado
    }

//area del cilindro
function area_cilindro(altura, radio) {
    //inicializar variables
    let area = 0
    let ar_circulo = 0
    let area_lateral
    //calculo
    a_circulo = area_circulo(radio)
    area_lateral = 2 * PI*radio*altura
    //Area = Areal lateral + 2(area_circulo)
    area = area_lateral+2*a_circulo

    return area
}
//main
console.log("Mi calculadora integrada correctamente")