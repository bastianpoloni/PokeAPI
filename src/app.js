let card = document.getElementById("pokemon-grid");

function crearPokemon(poke) {
  card.innerHTML = `   
    <div class="card" style="width: 18rem;">
  <img src="${poke.sprites.front_default}" alt="${poke.name}"" class="card-img-top img-fluid p-2" alt="...">
  <div class="card-body">
    <h1 class="card-title text-center">${poke.name}</h1>
    <h5 class="card-text text-center">#${poke.id}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item "> <b>Type:</b> ${poke.types[0].type.name}</li>
    <li class="list-group-item"> <b> Abilities:</b> ${poke.abilities[0].ability.name}, ${poke.abilities[1].ability.name}</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`;
}



  
async function getPokemon(set){
    try{
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${set}`)
        let pokemon = await res.json(); 
        crearPokemon(pokemon);    
        return pokemon;
    }catch(error){
        console.log(error);
    }
    
}

console.log (getPokemon(1))




