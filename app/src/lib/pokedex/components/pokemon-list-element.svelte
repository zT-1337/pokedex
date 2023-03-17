<script lang="ts">
	import type { Pokemon } from "../types";

  export let pokemon: Pokemon;
  export let selected: boolean;
</script>

<li>
  <div class={`bg-base-100 p-2 mx-2 my-4 rounded-xl border-4 ${selected ? "border-primary font-semibold" : "border-base-content"}`}>
    <a href={`/pokedex/${pokemon.id}`}>{pokemon.name}</a>
  </div>
</li> 