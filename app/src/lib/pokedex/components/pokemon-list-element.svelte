<script lang="ts">
	import type { Pokemon } from "../types";

  export let pokemon: Pokemon;
  export let selectedIndex: number;

  function calcTranslateX(selectedIndex: number, pokemonId: number) {
    return `${Math.abs(pokemonId - selectedIndex) * 15}px`;
  }

  function calcTranslateY(selectedIndex: number) {
    //return `${(-(pokemonId - 1) + (pokemonId - selectedIndex) + 7) * 50}px`;
    return `${50 * (8 - selectedIndex)}px`
  }

</script>

<li>
  <div 
    class={`w-96 h-[50px] mx-2 text-center bg-base-100 p-2 rounded-xl border-4 ${selectedIndex === pokemon.id ? "border-primary font-semibold" : "border-base-content"}`}
    style={`transform: translate(${calcTranslateX(selectedIndex, pokemon.id)}, ${calcTranslateY(selectedIndex)})`}
  >
    <a class="block" href={`/pokedex/${pokemon.id}`}>{pokemon.name}</a>
  </div>
</li> 