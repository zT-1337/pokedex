import { getAllPokemon } from "$lib/server/pokedex/load-pokemon.server";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const pokemon = await getAllPokemon();

  return {
    pokemon
  };
}) satisfies PageServerLoad;