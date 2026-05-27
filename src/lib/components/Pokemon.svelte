<script>
    import {onMount} from "svelte";

    let {url} = $props();

    async function getPokemon(url) {
        const res = await fetch(url);
        return await res.json();
    };

    let pokePromise = getPokemon(url);
</script>

{#await pokePromise}
    <p>...fetching</p>
{:then pokemon}
<!-- This is the block that displays all the stuff -->
    <div>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites.front_shiny} alt={pokemon.name}>
    </div>
{:catch error}
    <p style="color:red">{error.message}</p>
{/await}

<style>
    div{
        border: 1px solid #333;
        padding: 1em;
        max-width: fit-content;
    }
</style>