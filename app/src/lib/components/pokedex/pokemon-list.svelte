<script lang="ts">
	import type { Pokemon } from "@prisma/client";
	import PokemonListElement from "./pokemon-list-element.svelte";

  export let pokemons: Pokemon[];
  export let selected = 1;
</script>

<ul class="overflow-hidden h-[750px]">
  {#each pokemons as pokemon (pokemon.id)}
    <PokemonListElement pokemon={pokemon} selectedIndex={selected}/>
  {/each}
</ul>