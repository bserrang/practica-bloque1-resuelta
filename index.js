// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png").

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: 'white',
    hex: '#ffffff'
  },
  {
    colorName: 'red',
    hex: '#ff0000'
  },
  {
    colorName: 'orange',
    hex: '#ffa500'
  },
  {
    colorName: 'yellow',
    hex: '#ffff00'
  },
  {
    colorName: 'orchid',
    hex: '#da70d6'
  },
  {
    colorName: 'pink',
    hex: '#ffc0cb'
  },
  {
    colorName: 'green',
    hex: '#008000'
  },
  {
    colorName: 'silver',
    hex: '#c0c0c0'
  }
];

let list = document.querySelector('.color-list');

colorList.forEach((colorElement, i) => {
  const item = document.createElement('li');
  const name = document.createElement('div');
  const show = document.createElement('div');
  const next = document.createElement('button');
  const body = document.createElement('button');

  item.classList.add('color-item');
  name.classList.add('color-name');
  show.classList.add('color-show');
  next.classList.add('color-set');
  body.classList.add('color-set');

  if (i % 2 !== 0) {
    item.classList.add('color-item--odd');
  }

  name.textContent = 'Color: ' + colorElement.colorName;
  show.textContent = 'Muestra';
  next.textContent = 'Next item color';
  body.textContent = 'Page color';

  show.style.backgroundColor = colorElement.hex;

  item.addEventListener('click', e => {
    e.stopPropagation();
    alert(colorElement.colorName);
  });

  next.addEventListener('click', e => {
    e.stopPropagation();
    if (colorList.length - 1 !== i) {
      next.parentNode.nextSibling.style.backgroundColor = colorElement.hex;
    } else {
      next.parentNode.parentNode.children[1].style.backgroundColor =
        colorElement.hex;
    }
  });
  body.addEventListener('click', e => {
    e.stopPropagation();
    document.body.style.backgroundColor = colorElement.hex;
  });

  item.appendChild(name);
  item.appendChild(show);
  item.appendChild(next);
  item.appendChild(body);

  list.appendChild(item);
});

document.body.addEventListener('click', () => {
  alert('body');
});
