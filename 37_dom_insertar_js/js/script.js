
/*CREANDO ELEMENTOS*/

/*
const divisor = document.createElement("div");
const comentario = document.createComment("Comentario");
const texto = document.createTextNode("Hola a todos");

//Modificar nuestro elemento creado
divisor.id = "header"; // id="header"
divisor.className = "box"; // class="box"
divisor.style = "background:lightgreen;";

console.log(divisor.hasAttributes()); // TRUE -> Tiene elementos
console.log(divisor.hasAttribute("name")); // FALSE -> No tiene attr name
console.log(divisor.getAttributeNames()); // ['id', 'class', 'style']
console.log(divisor.getAttribute("style")); // Valor del atributo style =>(background: lightgreen;)
divisor.removeAttribute("id"); // Eliminamos el atributo "id"
divisor.setAttribute("class", "caja"); // camabiamos el valor box -> caja

const attr_class = divisor.getAttributeNode("class"); // class="caja"
console.log(attr_class);
const class_extr = divisor.removeAttributeNode(attr_class); // attributo class extraido
console.log(class_extr);


const attr_style = divisor.getAttributeNode("style"); // obtenemos el atributo como Nodo
console.log(attr_style); // Mostramos el Atributo Style (Nodo)
attr_style.value = "color:red;"; // Modificamos el valor del attr
const style_mod = divisor.setAttributeNode(attr_style); // reemplazamos el attr
console.log(style_mod); // atributo style actualizado ->  <div style="color:red;"></div>
console.log(divisor);
*/

//const divisor = document.getElementById('header')


/*  MODIFICANDO EL HTML de un ELEMENTO*/


/*
// const divisor = document.getElementById("header");
const divisor = document.querySelector("#header");

console.log(divisor.nodeName); // DIV (Only read)

divisor.textContent = "Sub titulo <strong>01</strong>"; // No interpreta como html
console.log(divisor.textContent); // "Titulo principal"

divisor.innerHTML = "Sub titulo <strong>01</strong>"; // Modifica el html interno
console.log(divisor.innerHTML); // <h1>Titulo principal</h1>

divisor.outerHTML = "<h1> Header </h1>"; // Modifica todo el html incluyendo al contenedor
console.log(divisor.outerHTML); // <div id="header"> <h1>Titu...</div>
*/

/*  INSERTAR ELEMENTOS HTML */

