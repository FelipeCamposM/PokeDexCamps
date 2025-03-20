let pokemonName = document.getElementById('pokemonName');
let pokemonNumber = document.getElementById('pokemonNumber');
let pokemonType = document.getElementById('pokemonType');
let pokemonDescription = document.getElementById('pokemonDescription');
let pokemonImage = document.getElementById('pokemonImage');

const form = document.getElementById('form');
let inputSearch = document.getElementById('inputSearch');

const anterior = document.getElementById('btn-prev');
const proximo = document.getElementById('btn-next');

let searchPokemon = 1;
let currentPokemon = '';

async function getPokemon(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error.message);
    }
}

async function viewPokemon(pokemon) {
    let json = await getPokemon(pokemon);

    if (!json) {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Não encontrado';
        pokemonNumber.innerHTML = '';
        pokemonType.innerHTML = '';
        pokemonDescription.innerHTML = '';
    } else {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = json.name || '';
        pokemonNumber.innerHTML = json.id || '';
        pokemonType.innerHTML = json.types[0].type.name || '';
        pokemonDescription.innerHTML = json.moves[0].move.name || '';
        pokemonImage.src = json['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] || '';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(inputSearch.value);
    viewPokemon(inputSearch.value.toLowerCase());
    inputSearch.value = '';    
});

anterior.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        viewPokemon(searchPokemon);
    }
});

proximo.addEventListener('click', () => {
    if (searchPokemon >= 1) {
        searchPokemon += 1;
        viewPokemon(searchPokemon);
    }
});

viewPokemon(searchPokemon);
