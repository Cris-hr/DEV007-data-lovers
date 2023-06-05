# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

Este es el segundo proyecto del Bootcamp de Laboratoria DEV007, en el que trabajamos con mi compañera durante 3 semanas.

## 2. Resumen del proyecto

El objetivo de aprendizaje de este proyecto fue diseñar y construir una interfaz web donde se pueda visualizar y manipular data, entendiendo primeramente las necesidades del usuario.

Nuestro producto final es una página web que permite visualizar data de Pokemon, filtrarla, ordenarla, además se puede buscar en ella pokemones específicos.

## 3. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El rango de tiempo estimado para completar el proyecto es de 3 a 4 Sprints.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).

## 5. Organizacion

Como herramienta de organización utilizamos [Trello](https://trello.com/), en donde hicimos toda la planeación de trabajo de cada sprint que duró este proyecto (3):

![Trello](./src/img%20Read-me/organizaciontrello.jpeg)


## 6. Historias de usuario

Para las historias de usuario nos basamos principalmente en las necesidades compartidas por Laboratoria para los usuarios y las complementamos con los usuarios a los que consultamos o de los que recibimos feedback.


## 7. Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante nuestro trabajo hicimos e iteramos bocetos (_sketches_) usando papel y lápiz. 

![bajafidelidad0](./src/img%20Read-me/bajafidelidad0.jpg)

![bajafidelidad01](./src/img%20Read-me/bajafidelidad01.JPG)

Luego diseñamos prototipos de baja fidelidad en Canva:

![bajafidelidadcanva1](./src/img%20Read-me/bajafidelidad1.jpeg)

![bajafidelidadcanva2](./src/img%20Read-me/bajafidelidad2.jpeg)

![bajafidelidadcanva2](./src/img%20Read-me/bajafidelidad3.jpeg)

#### Prototipo de alta fidelidad

El prototipo de alta fidelidad lo desarrollamos en [Figma](https://www.figma.com/).

![altafidelidad1](./src/img%20Read-me/altafidelidad1.jpeg)

![altafidelidad2](./src/img%20Read-me/altafidelidad2.jpeg)

![altafidelidad3](./src/img%20Read-me/altafidelidad3.jpeg)

![altafidelidad4](./src/img%20Read-me/altafidelidad4.jpeg)

![altafidelidad5](./src/img%20Read-me/altafidelidad5.jpeg)

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar nuestra interfaz de usuario, trabajamos en su implementación.

Nuestra implementación:

1. Muestra la data en la interfaz: muestra una lista de cards.
2. Permite al usuario interactuar para obtener la infomación que necesita.

## 8. Consideraciones técnicas

La lógica del proyecto la implementamos completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO utilizamos librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
El _boilerplate_ que nos entregaron, contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/lol/lol.js';
```

La línea quedaría así:

```js
import data from './data/lol/lol.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 9. Desarrollo del Proyecto

**1. Homepage del proyecto:**

El proyecto inicia en esta página, en donde tienes dos botones: El botón Pokeresumen y el botón Pokedex.

![Homepage](./src/img%20Read-me/homePage.png)

**2. Resumepage:**

El botón Pokeresumen te envía a esta página, en donde podrás ver un video informativo del juego "Pokemon", y tendrás también la opción de ir a la Pokedex.

![Resumepage](./src/img%20Read-me/resumePage.png)

**3. Pokedex:**

El botón Pokedex te envía a esta página, aquí encontrarás las cartas de 251 pokemones en las que podrás encontrar importante información sobre ellos.

![Pokedex](./src/img%20Read-me/pokedex.png)

En esta página también podemos buscar un pokemón en específico, ordenarlos y filtrarlos como se muestran en las siguientes imágenes:

* Función de búsqueda:

![Búsqueda](./src/img%20Read-me/busqueda.png)

* Función de ordenamiento en ascendente y descendente:

![Ascendente](./src/img%20Read-me/Ascendente.png)

![Descendente](./src/img%20Read-me/Descendente.png)

* Función de filtrado por 5 tipos: 
 
 Agua.

 ![Agua](./src/img%20Read-me/agua.png)

 Fuego.

 ![Fuego](./src/img%20Read-me/fuego.png)

 Eléctricos.

 ![Electricos](./src/img%20Read-me/electrico.png)

 Venenosos.

 ![Venenosos](./src/img%20Read-me/venenosos.png)

 Psíquicos.

 ![Psíquicos](./src/img%20Read-me/psiquicos.png)

