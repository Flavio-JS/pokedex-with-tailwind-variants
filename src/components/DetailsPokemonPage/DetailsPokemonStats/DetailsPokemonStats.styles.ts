import { tv } from "tailwind-variants";

export const detailsPokemonStatsStyles = tv({
  slots: {
    detailsPokemonStatsWrapper:
      "h-full w-full bg-grayscale-white rounded-lg flex flex-col justify-between items-center p-[40px] md:p-[20px]",
    detailsPokemonStatsTypesWrapper: "flex gap-4",
    detailsPokemonStatsAboutTitle: "text-[14px] font-bold",
    detailsPokemonStatsBaseStatsTitle: "text-[14px] font-bold",
  },
  variants: {
    typeColor: {
      bug: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-bug",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-bug",
      },
      dark: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-dark",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-dark",
      },
      dragon: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-dragon",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-dragon",
      },
      electric: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-electric",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-electric",
      },
      fairy: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-fairy",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-fairy",
      },
      fighting: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-fighting",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-fighting",
      },
      fire: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-fire",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-fire",
      },
      flying: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-flying",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-flying",
      },
      ghost: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-ghost",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-ghost",
      },
      normal: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-normal",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-normal",
      },
      grass: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-grass",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-grass",
      },
      ground: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-ground",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-ground",
      },
      ice: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-ice",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-ice",
      },
      poison: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-poison",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-poison",
      },
      psychic: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-psychic",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-psychic",
      },
      rock: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-rock",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-rock",
      },
      steel: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-steel",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-steel",
      },
      water: {
        detailsPokemonStatsAboutTitle: "text-pokemonType-water",
        detailsPokemonStatsBaseStatsTitle: "text-pokemonType-water",
      },
      type: {
        detailsPokemonStatsAboutTitle: "grayscale.wireframe",
        detailsPokemonStatsBaseStatsTitle: "grayscale.wireframe",
      },
    },
  },
});
