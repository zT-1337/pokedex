import type { PokemonType } from "@prisma/client";

export function typeToColor(type: PokemonType): string {
  switch(type) {
    case "normal":
      return "#a0a3a0";
    case "fighting":
      return "#a84c3d";
    case "flying":
      return "#87b5e5";
    case "poison":
      return "#864ab8";
    case "ground":
      return "#956833";
    case "rock":
      return "#a8995b";
    case "bug":
      return "#83ad25";
    case "ghost":
      return "#633c64";
    case "steel":
      return "#9999a8";
    case "fire":
      return "#e53b19";
    case "water":
      return "#278bcc";
    case "grass":
      return "#58a951";
    case "electric":
      return "#e5c600";
    case "psychic":
      return "#e55973";
    case "ice":
      return "#68baac";
    case "dragon":
      return "#4d64ab";
    case "dark":
      return "#463e3e";
    case "fairy":
      return "#d480cf";
    case "unknown":
      return "#68a090";
    case "shadow":
      return "#713f71";
  }
}

export function getBackgroundColorOfPokemon(primaryType: PokemonType, secondaryType: PokemonType | null) {
  if(!secondaryType) {
    return `background-color: ${typeToColor(primaryType)}`;
  }

  const primaryTypeColor = typeToColor(primaryType);
  const secondaryTypeColor = typeToColor(secondaryType);
  return `background: linear-gradient(135deg, ${primaryTypeColor} 0%, ${primaryTypeColor} 50%, ${secondaryTypeColor} 50%, ${secondaryTypeColor} 100%)`;
}