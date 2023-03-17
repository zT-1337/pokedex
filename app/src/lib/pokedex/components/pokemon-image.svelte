<script lang="ts">
	import type { Pokemon } from "../types";
	import { typeToColor } from "../utils/pokemon-type";

  export let pokemon: Pokemon;

  function getBorderColor(pokemon: Pokemon) {
    if(pokemon.secondaryType === undefined) {
      return `border-color: ${typeToColor(pokemon.primaryType)}`;
    }

    const primaryTypeColor = typeToColor(pokemon.primaryType);
    const secondaryTypeColor = typeToColor(pokemon.secondaryType);

    return `border-image: linear-gradient(135deg, ${primaryTypeColor} 0%, ${primaryTypeColor} 50%, ${secondaryTypeColor} 50%, ${secondaryTypeColor} 100%) 1`;
  }
</script>

<div 
  class={`bg-base-100 border-4 border-solid`} 
  style={getBorderColor(pokemon)}
>
  <img width="475" height="475" src={pokemon.imageUrl} alt={`Picture of ${pokemon.name}`}/>
</div>