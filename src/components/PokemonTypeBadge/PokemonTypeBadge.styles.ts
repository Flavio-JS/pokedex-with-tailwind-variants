import { tv } from "tailwind-variants";

export const pokemonTypeBadgeStyles = tv({
  slots: {
    pokemonTypeBadgeStylesWrapper:
      "h-[20px] min-w-min px-[8px] py-[2px] text-[10px] font-bold rounded-2xl",
  },
  variants: {
    backgroundTypeColor: {
      bug: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-bug",
      },
      dark: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-dark",
      },
      dragon: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-dragon",
      },
      electric: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-electric",
      },
      fairy: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-fairy",
      },
      fighting: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-fighting",
      },
      fire: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-fire",
      },
      flying: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-flying",
      },
      ghost: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-ghost",
      },
      normal: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-normal",
      },
      grass: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-grass",
      },
      ground: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-ground",
      },
      ice: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-ice",
      },
      poison: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-poison",
      },
      psychic: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-psychic",
      },
      rock: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-rock",
      },
      steel: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-steel",
      },
      water: {
        pokemonTypeBadgeStylesWrapper: "bg-pokemonType-water",
      },
      type: {
        pokemonTypeBadgeStylesWrapper: "grayscale.medium",
      },
    },
  },
});
