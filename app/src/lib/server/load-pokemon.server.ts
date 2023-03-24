import type { Pokemon } from "@prisma/client";
import prismaClient from "./db.server";

export function getAllPokemon(): Promise<Pokemon[]> {
  return prismaClient.pokemon.findMany();
}