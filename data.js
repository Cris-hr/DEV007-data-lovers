
import data from "./data/pokemon/pokemon.js";

//Función para ordenar el array de objetos de pokémon
export function ordenarPokemones(order) {  
  if (order === "asc") { // ascendente
    return data.pokemon.sort((a, b) => a.name.localeCompare(b.name))
  } else if (order === "desc") { // descendente
    return data.pokemon.sort((a, b) => -1 * a.name.localeCompare(b.name))    
  }
}

//Función para filtrar pokémon por tipo
export function filterByType(pokemonData, type) {
  return pokemonData.filter(pokemon => pokemon.type.includes(type));
}
  
//funcion para el buscador
export function findByName(pokemonData, name){
  return pokemonData.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()))
}

