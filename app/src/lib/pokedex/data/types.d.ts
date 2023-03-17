export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  primaryType: PokemonType;
  secondaryType?: PokemonType;
};

export type PokemonType = {
  name: string;
};