import { Pokemon, PrismaClient } from "@prisma/client";
import pokemonDataJson from "./pokemon_data.json";
const prismaClient = new PrismaClient();

async function main() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for(const pokemonJson of pokemonDataJson as any[]) {
    const pokemon: Pokemon = {
      id: pokemonJson.id,
      name: pokemonJson.name,
      imageUrl: pokemonJson.sprites.other["official-artwork"].front_default,
      primaryType: pokemonJson.types[0].type.name,
      secondaryType: pokemonJson.types[1] !== undefined ? pokemonJson.types[1].type.name : undefined,
    }

    await prismaClient.pokemon.upsert({
      where: {id: pokemon.id},
      update: pokemon,
      create: pokemon,
    });
  }
}

main()
  .then(() => {
    prismaClient.$disconnect();
  })
  .catch(error => {
    console.error("Seeding failed: ", error);
    prismaClient.$disconnect();
  });