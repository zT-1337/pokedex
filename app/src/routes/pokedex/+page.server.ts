import { getAllPokemon } from "$lib/server/load-pokemon.server";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const pokemon = await getAllPokemon();

  return {
    pokemon
  };
}) satisfies PageLoad;