
/*  INSERTAR ELEMENTOS HTML */

const img = document.createElement('img');
img.src = 'https://picsum.photos/200/300?grayscale';
img.alt = 'logo javascript';

document.body.appendChild(img);


//creando un nodo <div> (contenedor)
const div = document.createElement('div');
div.textContent = 'Esto es un div insertado con JS';

//creando un nodo <h1>
const h1 = document.createElement('h1');
h1.id =  'title';
h1.textContent = 'Titulo H1';

//inseretar h1 dentro del div (contenedor)
div.insertAdjacentElement('afterbegin', h1);
document.body.appendChild(div)
console.log(div);