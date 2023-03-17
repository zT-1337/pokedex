<script lang="ts">
	import { clamp } from "$lib/utils/math";
	import type { Pokemon } from "../types";
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

<div on:wheel|preventDefault={handleScroll}>
  <PokemonList pokemons={pokemons} selected={selected}/>
</div>