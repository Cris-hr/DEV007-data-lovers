import data from './data/pokemon/pokemon.js';
import {ordenarPokemones} from './data.js';
import { filterByType} from './data.js';
import { findByName } from './data.js';

const contenidoCard = document.querySelector(".adentro");

document.getElementById("pokedexBtn").onclick = function () {      //funcion del botón pokedex//
  document.getElementById("homePageStart").style.display = "none";
  document.getElementById("listaPokemon").style.display = "flex";
};

document.getElementById("resumeBtn").onclick = function () {      //funcion del botón pokeresumen//
  document.getElementById("homePageStart").style.display = "none";
  document.getElementById("resumePageStart").style.display = "block";
};

document.getElementById("pokedexResumePageBtn").onclick = function () {    //funcion del boton pokedex en la resumePage//
  document.getElementById("resumePageStart").style.display = "none";
  document.getElementById("listaPokemon").style.display = "flex";
};


document.getElementById("pokedexHomePageBtn").onclick = function () {    //funcion del boton Inicio en la pokedex//
  document.getElementById("listaPokemon").style.display = "none";
  document.getElementById("homePageStart").style.display = "flex";
};


data.pokemon.forEach((pokemones) => {   
  contenidoCard.innerHTML += `
    <button class= "mostrar">  
      <div class= "card__inner">
        <div class= "card__side card__side--front"> 
          <div class="card-imag">
            <img src="${pokemones.img}" class= "imagen" alt="">
          </div>
              <div class= "card-contenido">
               <p class="numeroPokemon" >${pokemones.num}</p>
               <h3>${pokemones.name}</h3>
                <div class="poder">
                 <p>tipo: ${pokemones.type}</p>
                  <div class= "generacion">
                    <p>${pokemones.generation.num} - ${pokemones.generation.name}</p>        
                  </div>
                </div>
              </div>
        </div>
          <div class= "card__side card__side--back">
             <div class= "card__body">            
               <p class= "height">ALTURA: ${pokemones.size.height}</p>             
               <p class= "weight">PESO: ${pokemones.size.weight}</p>
                 <div class = "resistencia">
                   <p>RESISTENCIA:</p>
                   <p class= "parrafo">${pokemones.resistant[0]} , ${pokemones.resistant[1]}</p>
                   <p class= "parrafo">${pokemones.resistant[2]} , ${pokemones.resistant[3]}</p>
                   <p class= "parrafo">${pokemones.resistant[4]}</p>
                 </div>
              </div>
          </div>      
      </div>
    </button>`;
})

function displayFilteredData(filteredData) {
  const contenidoCard = document.querySelector(".adentro");
  contenidoCard.innerHTML = ""; // Limpiar contenido existente
  
  filteredData.forEach(pokemones => {
    contenidoCard.innerHTML += `
    <button class= "mostrar">  
    <div class= "card__inner">
      <div class= "card__side card__side--front"> 
        <div class="card-imag">
          <img src="${pokemones.img}" class= "imagen" alt="">
        </div>
            <div class= "card-contenido">
             <p class="numeroPokemon" >${pokemones.num}</p>
             <h3>${pokemones.name}</h3>
              <div class="poder">
               <p>tipo: ${pokemones.type}</p>
                <div class= "generacion">
                  <p>${pokemones.generation.num} - ${pokemones.generation.name}</p>        
                </div>
              </div>
            </div>
      </div>
        <div class= "card__side card__side--back">
           <div class= "card__body">            
             <p class= "height">ALTURA: ${pokemones.size.height}</p>             
             <p class= "weight">PESO: ${pokemones.size.weight}</p>
               <div class = "resistencia">
                 <p>RESISTENCIA:</p>
                 <p class= "parrafo">${pokemones.resistant[0]} , ${pokemones.resistant[1]}</p>
                 <p class= "parrafo">${pokemones.resistant[2]} , ${pokemones.resistant[3]}</p>
                 <p class= "parrafo">${pokemones.resistant[4]}</p>
               </div>
            </div>
        </div>      
    </div>
  </button>`;
  });
}
 
// Obtener el elemento select del usuario
const selectElement = document.getElementById("select-ordenar");

// Escuchar el evento change del select
selectElement.addEventListener("change", function() {
  const selectedOption = selectElement.value;
  const sortedData = ordenarPokemones(selectedOption);
  
  displayFilteredData(sortedData)
 
});

//funcionalidad del filtrado
document.getElementById("filterSelect").addEventListener("change", function () {
  const filterValue = this.value;
  let filteredData;

  if (filterValue === "water") {
    
    filteredData = filterByType(data.pokemon, "water");
  } else if (filterValue === "fire") {
    
    filteredData = filterByType(data.pokemon, "fire");
  } else if (filterValue === "poison") {
    
    filteredData = filterByType(data.pokemon, "poison"); 

  }else if (filterValue === "electric") {
    
    filteredData = filterByType(data.pokemon, "electric"); 
  
  }else if (filterValue === "psychic") {
    
    filteredData = filterByType(data.pokemon, "psychic"); 
  
  }else {

    filteredData = data.pokemon; // Mostrar todos los pokemon
  }
  // Lógica para mostrar los resultados filtrados en la interfaz
  displayFilteredData(filteredData);
});


//funcionalidad del buscador
document.getElementById("busquedaPokemon").addEventListener ("keyup", function () {
  const foundName = this.value;
  const foundPokemon = findByName(data.pokemon, foundName);
  const errorContainer = document.getElementById("notFound");
  //console.log(foundPokemon);
  contenidoCard.style.display = "grid"
  errorContainer.style.display = "none";
  displayFilteredData (foundPokemon);
  if(foundPokemon.length === 0){
    errorContainer.style.display = "block";
    errorContainer.textContent = "Pokémon no encontrado. Inténtalo de nuevo.";
    contenidoCard.style.display = "none"
  }
})
