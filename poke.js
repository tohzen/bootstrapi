const bootun = document.getElementById("search");
let pics = document.getElementById("new");
let input = document.getElementById("input").value


const pokeClosed = document.getElementById("closed");
const button = document.getElementById("closeMe")
const front = document.getElementById("front");
const back = document.getElementById("back")
const inner = document.getElementById("inner")

document.addEventListener("DOMContentLoaded", () => {
    fetchAllPokemon();
    createPokeImage()
})



pokeClosed.addEventListener("click", function () {
    inner.style.transform = "rotateY(180deg)";
    
    
    
})

button.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    
})

bootun.addEventListener("click",createPokeImage)


function createPokeImage(input){
    pics.src = `https://pokeres.bastionbot.org/images/pokemon/${input}.png`

}

function fetchAllPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=999')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
                                //Example: https://pokeapi.co/api/v2/pokemon/1/"
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}

function renderPokemon(pokeData){

    createPokeImage(pokeData.id);

    let pokeName = document.createElement('h4') 
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`

}




// bootun.addEventListener("click", fetchAllPokemon)
//     let input = document.getElementById("input").value
//     const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=999';
//     console.log('button clicked')
    
//     fetch(URL)
//     .then(function (rawResponse) {
//         return rawResponse.json();
//     })
//     .then(function (json) {
//         createPokeImage()
//         json.results.forEach(function(input))

//         console.log(json)
//     })

// })



