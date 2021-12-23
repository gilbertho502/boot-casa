const n1 = 4;
const n2 = 15.8;

const n3 = new Number("abc");
const n4 = new Number(13.6);

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);

console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); //false
console.log(Infinity);

console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(4.6)); // false

// Stack Over Flow
console.log(Number.isSafeInteger(1e15)); // true
console.log(Number.isSafeInteger(1e16)); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5)); // false

/* Conversiones */

let text_number = "348.42"; // Cadena (String)

console.log(Number.parseInt(text_number)); // 348
console.log(Number.parseFloat(text_number)); // 348.42

// Bases numéricas

let decimal = 124;
let binario = "1111100"; // base 2
let octal = "174"; // base 8
let hexadecimal = "7C"; // base 16

console.log(Number.parseInt(binario, 2));
console.log(Number.parseInt(octal, 8));
console.log(Number.parseInt(hexadecimal, 16));

let number = 1234567890
console.log(number.toExponential(2))
console.log(number.toFixed(2))
console.log(number.toPrecision(1))


//literales
const texto1 = "Hola a todos"
const texto2 = "otro mensaje de texto"

//objetos

const texto3 = new String("hola a todos")
const texto4 = new String("otro mensaje de texto")

console.log(texto1)
console.log(texto2)
console.log(texto3)
console.log(texto4)

//metodo chartAt

"Manz".charAt(0)
"Manz".charAt(1)
"Manz".charAt(10)
"Manz"[0]
"Manz"[1]
"Manz"[2]

console.log(`El texto: "${texto2}" tiene ${texto2.length} caracteres`);


let frase1 = "Camaron que se duerme se lo lleva la corriente";
let frase2 = "En boca cerrada no entran moscas";
let frase3 = "Feliz como una lombriz";
let frase4 = "De tal palo tal astilla";
let frase5 = "Mal de muchos, consuelo de pocos";
let frase6 = "'¡Chinchilete!', '¡Yo machete!'";
let frase7 = "Mas vale tarde que nunca";
let frase8 = "El pato que no conoce el océano en cualquier charco es feliz";
let frase9 = "Ya nos cayo el chahuistle";
let frase10 = "No hay peor ciego que el que no quiere ver";

console.log(frase3);
console.log(frase3.length);
console.log(frase3.charAt(0)); // 0 - 21
console.log(frase3.charAt(6));
console.log(frase3.charAt(11));
console.log(frase3.charAt(15));
console.log(frase3[11]);
console.log(frase3[15]);

console.log(frase7)
//frase7 = frase7.concat(" que tonto que no lo haga")
//frase7  = frase7 + " que tonto que no lo haga"
//frase7 = `${frase7} que tonto que no lo haga`
frase7 += " que tonto que no lo haga"
frase7 = new String(frase7)
console.log(frase7)


let pos = frase7.indexOf('tonto')
console.log(pos)
//buscar la posicion de una palabra o letra
console.log(frase7.indexOf('g'))
console.log(frase7.indexOf('taza'))
console.log(frase7.indexOf('que'))
console.log(frase7.indexOf('que', 18))

//busacar la ultima posicion de una palabra o letra

console.log(frase7.lastIndexOf('g'))
console.log(frase7.lastIndexOf('taza'))
console.log(frase7.lastIndexOf('que', 24))
console.log(frase7.lastIndexOf('que'))

let direccion0 = "Calle santa rosa " +1+2+3
console.log(direccion0)
let direccion = "Calle santa rosa " +(1+2+3)
console.log(direccion)

//metods para busquedas

console.log("Manz".startsWith("M"))
console.log("Manz".startsWith("a",6))
console.log("Manz".endsWith("o"))
console.log("Manz".endsWith("n",3))
console.log("Manz".includes("an"))
console.log("Manz".includes("M",1))
console.log("")
console.log(frase10.startsWith("No hay peor"))
console.log(frase10.startsWith("No"))
console.log(frase10.startsWith("no"))

console.log(frase10.endsWith("ver")); // true
console.log(frase10.endsWith("iere ver")); // true;
console.log(frase10.endsWith("kiere ver")); // false;
console.log(frase10.endsWith("ciego", 17)); //


console.log(frase10.includes("peor"))
console.log(frase10.includes("chauistle"))
console.log(frase10.includes("no"))
console.log("")


console.log(frase1.search("corriente$"))


frase9 = new String(frase9)
console.log(frase9.search("^Ya nos cayo el chahuistle$"))

let numero = "123456789A"

console.log(numero.search("^[0-9]*$"))