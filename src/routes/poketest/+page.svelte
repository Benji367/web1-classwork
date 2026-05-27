<script>
    let { data } = $props();
</script>

<!-- Loop over the Pokemons -->
{#each data.pokemons.results as pokemon}
<h2>{pokemon.name}</h2>
{/each}