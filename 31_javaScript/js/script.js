
b1 = 0.0
b2 = 0.0
h = 0.0
a = 0.0
let b1 = prompt("Ingrese la base superior");
b1 = parseFloat(b1)
let b2 = prompt("Ingrese el lado inferior");
b2 = parseFloat(b2)
let h = prompt("Ingrese la altura");
h = parseFloat(h)

let a = 0.5*((b1+b2)/h);
a = parseFloat(a)
console.log("el area es: ", a);

// let mi_nombre = prompt("Ingresa tu nombre");
// console.log("Tu nombre es: ", mi_nombre)

// edad = prompt("Ingresa tu edad")
// edad = parseInt(edad)
// console.log("Tu edad dentro de 5 anios sera: ", (edad + 5))

//----------------------------------------------------------

h = 0.0
b = 0.0
a = 0.0
r = 0.0
v = 0.0
t = 0.0
d = 0.0
vo = 0.0
c = 0.0
s = 0.0
area = 0.0
total = 0.0
//Ejercicio 1
let b = prompt("Ingrese la base: ")
let h = prompt("Ingrese la altura: ")

let a = 0.5*h*b
console.log("El area del triangulo es: " , a)

//Ejercicio 2
let r = prompt("Ingrese el radio: ")
let h = prompt("Ingrese la altura: ")
let a = 2*3.1415926*r *(h+r)
console.log("El area del cilindro es: ", a)

//Ejerciio 3
let r = prompt("Ingrese el radio: ")
let h = prompt("Ingrese la altura: ")
let v = 3.141516926*h*r*r
console.log("El volumen del cilindro es: " ,v)

//Ejercicio 4
let v = prompt("Ingrese la velocidad (km/h): ")
let t = prompt("Ingrese el tiempo (h): ")
let d = v*t
console.log("La distancia recorrida es",d, "km")

//Ejercicio 5
let vo = prompt("Ingrese la velocidad inicial(m/s): ")
let t = prompt("Ingrese el tiempo (s): ")
let a = prompt("Ingrese la aceleracion(m/s^2): " )
d = vo*t + 0.5*a*t*t
console.log("La distancia recorrida es: ", d, "m")

//Ejercicio 6
let a = prompt("Igrese el valor del lado a: ")
let b = prompt("Igrese el valor del lado b: ")
let c = prompt("Igrese el valor del lado c: ")
s = 0.5*(a+b+c)
area = s*(s-a)*(s-b)*(s-c)
total = Math.sqrt(area)

//--------------------------------------------------------
// Inicialización de variables
let bi = 0.0;
let bs = 0.0;
let h = 0.0;
let area = 0.0;

// Solicitar informacion al usuario con prompt
// prompt -> Pide info al usuario similar -> LEER (pseInt)
bi = prompt("Ingrese la base inferior");
console.log("bi es una variable del tipo :", typeof bi); // string

bi = parseFloat(bi);
console.log("bi despues de parseFloat es del tipo", typeof bi); // number

bs = prompt("Ingrese la base superior");
bs = parseFloat(bs);

h = prompt("Ingrese la Altura");
h = parseFloat(h);

console.log("Base inferior", bi);
console.log("Base superior", bs);
console.log("Altura", h);

// Cálculo del area del trapecio
area = ((bi + bs) * h) / 2;
console.log("El area de trapecio es: ", area);

