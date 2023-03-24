<script lang="ts">
	import { getBackgroundColorOfPokemon } from "$lib/utils/pokemon-type";
	import type { Pokemon } from "@prisma/client";

  export let pokemon: Pokemon;
</script>

<div 
  class="p-2 rounded-xl"
  style={getBackgroundColorOfPokemon(pokemon.primaryType, pokemon.secondaryType)}
>
  <div class="bg-base-100">
    <img width="475" height="475" src={pokemon.imageUrl} alt={`Picture of ${pokemon.name}`}/>
  </div>
</div>