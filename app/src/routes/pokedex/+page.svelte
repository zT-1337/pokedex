<script lang="ts">
  import Pokedex from "$lib/components/pokedex/pokedex.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="container mx-auto bg-base-300 rounded p-4 my-4 text-base-content">
  <h1 class="text-4xl text-center mb-2">Pokedex</h1>
  <Pokedex pokemons={data.pokemon}/>
</div>