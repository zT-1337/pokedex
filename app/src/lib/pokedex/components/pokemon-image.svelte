<script lang="ts">
	import type { Pokemon } from "../types";
	import { typeToColor } from "../utils/pokemon-type";

  export let pokemon: Pokemon;
</script>

<div class={`bg-base-100 rounded-2xl border-4`} style={`border-color: ${typeToColor(pokemon.primaryType)}`}>
  <img width="475" height="475" src={pokemon.imageUrl} alt={`Picture of ${pokemon.name}`}/>
</div>