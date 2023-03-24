import type { Pokemon } from "@prisma/client";

export async function loadPokemonForList(fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>): Promise<Pokemon[]> {
  const result: Pokemon[] = [];

  for(let i = 1; i <= 40; ++i) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);

    if(!response.ok) {
      break;
    }

    const jsonResult = await response.json();

    result.push({
      id: jsonResult.id,
      name: jsonResult.name,
      imageUrl: jsonResult.sprites.other["official-artwork"].front_default,
      primaryType: jsonResult.types[0].type.name,
      secondaryType: jsonResult.types[1] !== undefined ? jsonResult.types[1].type.name : undefined,
    });
  }

  return result;
}