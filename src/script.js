const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292';
let pokemonList = [];
let currentIndex = 0;

async function fetchPokemonList() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    pokemonList = data.results;
    // console.log(pokemonList)
    showPokemon(currentIndex);
}

async function fetchPokemonDetails(pokemon) {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return data;
}

function changeImage(id, url) {
    document.getElementById(id).src = url;
}

function changeText(id, text) {
    document.getElementById(id).innerText = text;
}

async function showPokemon(index) {
    const pokemon = pokemonList[index];
    const details = await fetchPokemonDetails(pokemon);
    changeText('name', details.name);
    changeImage('img_sprite_front_default', details.sprites.front_default);
}

function previousPokemon() {
    currentIndex = (currentIndex === 0) ? pokemonList.length - 1 : currentIndex - 1;
    console.log(currentIndex)
    showPokemon(currentIndex);
}


function nextPokemon() {
    currentIndex = (currentIndex === pokemonList.length - 1) ? 0 : currentIndex + 1;
    showPokemon(currentIndex);
}

fetchPokemonList();