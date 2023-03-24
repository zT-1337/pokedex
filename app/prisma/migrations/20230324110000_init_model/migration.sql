-- CreateEnum
CREATE TYPE "PokemonType" AS ENUM ('normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow');

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "primaryType" "PokemonType" NOT NULL,
    "secondaryType" "PokemonType",

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);
