import { loadPokemonForList } from "../../lib/pokedex/data/load-pokemon"
import type { PageLoad } from "./$types";

export const load = (async ({fetch}) => {
  const pokemon = await loadPokemonForList(fetch);

  return {
    pokemon
  };
}) satisfies PageLoad;