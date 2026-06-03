<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Pokemon from '$lib/components/Pokemon.svelte'

    let { data } = $props();
    console.log(data);
</script>

<Navbar></Navbar>
<!-- Loop over the Pokemons -->

<section>
<!-- Poke grid-->
{#each data.pokemons.results as pokemon}
    <Pokemon url = {pokemon.url} />
{/each}
</section>

<style>
    section{
        padding: auto;
        display: grid;
        grid-template-columns: auto auto auto;
    }

</style>