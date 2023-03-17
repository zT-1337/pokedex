<script lang="ts">
	import { clamp } from "$lib/utils/math";
	import type { Pokemon } from "../types";
	import PokemonListElement from "./pokemon-list-element.svelte";

  export let pokemons: Pokemon[];
  export let selected = 1;
</script>

<ul>
  {#each pokemons as pokemon (pokemon.id)}
    <PokemonListElement pokemon={pokemon} selected={pokemon.id === selected}/>
  {/each}
</ul>