import type { Pokemon } from "./types";

export async function loadPokemonForList(fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>): Promise<Pokemon[]> {
  const result: Pokemon[] = [];

  for(let i = 1; i <= 10; ++i) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);

    if(!response.ok) {
      break;
    }

    const jsonResult = await response.json();

    result.push({
      id: jsonResult.id,
      name: jsonResult.name,
      imageUrl: jsonResult.sprites.other["official-artwork"].front_default,
      primaryType: {
        name: jsonResult.types[0].type.name
      },
      secondaryType: jsonResult.types[1] !== undefined ? {name: jsonResult.types[1].type.name} : undefined,
    });
  }

  return result;
}