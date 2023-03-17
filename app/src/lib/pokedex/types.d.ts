export type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  primaryType: PokemonType;
  secondaryType?: PokemonType;
};

export type PokemonType = 
"normal" | 
"fighting" | 
"flying" | 
"poison" | 
"ground" | 
"rock" | 
"bug" |
"ghost" | 
"steel" |
"fire" |
"water" |
"grass" |
"electric" |
"psychic" |
"ice" | 
"dragon" | 
"dark" | 
"fairy" | 
"unknown" |
"shadow";