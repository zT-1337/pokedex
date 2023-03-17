<script lang="ts">
	import PokemonList from "../../lib/pokedex/components/pokemon-list.svelte";
import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="container mx-auto bg-base-300 rounded p-4 my-4 text-base-content">
  <h1 class="text-4xl text-center">Pokedex</h1>
  <PokemonList pokemons={data.pokemon}/>
</div>