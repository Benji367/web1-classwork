export async function load({fetch}){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset60')
    const pokemons = await res.json();
    return { pokemons };
    
}