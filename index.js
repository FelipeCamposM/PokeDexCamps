async function getPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
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


document.addEventListener('DOMContentLoaded', function() {
    let pokemon = getPokemon();
    console.log("segue o pokemon", pokemon);
    let pokemonName = pokemon.name;
    console.log("nome do pokemon:", pokemonName);
    // Selecionando os elementos
    let pokemonNamePage = document.getElementById('pokemonName');
    pokemonNamePage.innerText = pokemonName;
    const pokemonTypeElement = document.getElementById('pokemonType');
    const pokemonDescriptionElement = document.getElementById('pokemonDescription');
    
    // // Exemplo de como definir os valores
    // function updatePokemonInfo(name, type, description) {
    //     pokemonNameElement.textContent = name;
    //     pokemonTypeElement.textContent = type;
    //     pokemonDescriptionElement.textContent = description;
    // }
    
    // // Exemplo de uso
    // updatePokemonInfo('Pikachu', 'Elétrico', 'Um pokémon do tipo elétrico muito fofo!');
});