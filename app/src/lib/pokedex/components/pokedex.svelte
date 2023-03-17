<script lang="ts">
	import { clamp } from "$lib/utils/math";
	import type { Pokemon } from "../types";
	import PokemonImage from "./pokemon-image.svelte";
	import PokemonList from "./pokemon-list.svelte";

  export let pokemons: Pokemon[];
  let selected = 1; 

  function handleScroll(event: WheelEvent) {
    selected = clamp(
      1, 
      event.deltaY < 0 ? selected - 1 : selected + 1,
      pokemons.length
    );
  }
</script>

<div class="flex flex-row items-center">
  <div>
    <PokemonImage pokemon={pokemons[selected - 1]}/>
  </div>
  <div class="flex-1 overflow-hidden" on:wheel|preventDefault={handleScroll}>
    <PokemonList pokemons={pokemons} selected={selected}/>
  </div>
</div>