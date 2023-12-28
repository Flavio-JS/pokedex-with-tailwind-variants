import { tv } from "tailwind-variants";

export const detailsPokemonStatsBarStyles = tv({
  slots: {
    detailsPokemonStatsBarTitle: "text-[10px] font-bold",
    detailsPokemonStatsBarWrapper: "flex gap-[8px] w-full max-w-[312px]",
    detailsPokemonStatsBarRowFull: "w-full h-[4px] opacity-20 bg-grayscale-wireframe",
    detailsPokemonStatsBarRow: "h-[4px] bg-grayscale-wireframe",
  },
  variants: {
    typeColor: {
      bug: {
        detailsPokemonStatsBarTitle: "text-pokemonType-bug",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-bug",
        detailsPokemonStatsBarRow: "bg-pokemonType-bug",
      },
      dark: {
        detailsPokemonStatsBarTitle: "text-pokemonType-dark",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-dark",
        detailsPokemonStatsBarRow: "bg-pokemonType-dark",
      },
      dragon: {
        detailsPokemonStatsBarTitle: "text-pokemonType-dragon",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-dragon",
        detailsPokemonStatsBarRow: "bg-pokemonType-dragon",
      },
      electric: {
        detailsPokemonStatsBarTitle: "text-pokemonType-electric",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-electric",
        detailsPokemonStatsBarRow: "bg-pokemonType-electric",
      },
      fairy: {
        detailsPokemonStatsBarTitle: "text-pokemonType-fairy",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-fairy",
        detailsPokemonStatsBarRow: "bg-pokemonType-fairy",
      },
      fighting: {
        detailsPokemonStatsBarTitle: "text-pokemonType-fighting",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-fighting",
        detailsPokemonStatsBarRow: "bg-pokemonType-fighting",
      },
      fire: {
        detailsPokemonStatsBarTitle: "text-pokemonType-fire",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-fire",
        detailsPokemonStatsBarRow: "bg-pokemonType-fire",
      },
      flying: {
        detailsPokemonStatsBarTitle: "text-pokemonType-flying",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-flying",
        detailsPokemonStatsBarRow: "bg-pokemonType-flying",
      },
      ghost: {
        detailsPokemonStatsBarTitle: "text-pokemonType-ghost",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-ghost",
        detailsPokemonStatsBarRow: "bg-pokemonType-ghost",
      },
      normal: {
        detailsPokemonStatsBarTitle: "text-pokemonType-normal",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-normal",
        detailsPokemonStatsBarRow: "bg-pokemonType-normal",
      },
      grass: {
        detailsPokemonStatsBarTitle: "text-pokemonType-grass",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-grass",
        detailsPokemonStatsBarRow: "bg-pokemonType-grass",
      },
      ground: {
        detailsPokemonStatsBarTitle: "text-pokemonType-ground",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-ground",
        detailsPokemonStatsBarRow: "bg-pokemonType-ground",
      },
      ice: {
        detailsPokemonStatsBarTitle: "text-pokemonType-ice",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-ice",
        detailsPokemonStatsBarRow: "bg-pokemonType-ice",
      },
      poison: {
        detailsPokemonStatsBarTitle: "text-pokemonType-poison",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-poison",
        detailsPokemonStatsBarRow: "bg-pokemonType-poison",
      },
      psychic: {
        detailsPokemonStatsBarTitle: "text-pokemonType-psychic",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-psychic",
        detailsPokemonStatsBarRow: "bg-pokemonType-psychic",
      },
      rock: {
        detailsPokemonStatsBarTitle: "text-pokemonType-rock",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-rock",
        detailsPokemonStatsBarRow: "bg-pokemonType-rock",
      },
      steel: {
        detailsPokemonStatsBarTitle: "text-pokemonType-steel",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-steel",
        detailsPokemonStatsBarRow: "bg-pokemonType-steel",
      },
      water: {
        detailsPokemonStatsBarTitle: "text-pokemonType-water",
        detailsPokemonStatsBarRowFull: "bg-pokemonType-water",
        detailsPokemonStatsBarRow: "bg-pokemonType-water",
      },
      type: {
        detailsPokemonStatsBarTitle: "text-grayscale-wireframe",
        detailsPokemonStatsBarRowFull: "bg-grayscale-w-reframe",
        detailsPokemonStatsBarRow: "bg-grayscale-w-reframe",
      },
    },
  },
});
